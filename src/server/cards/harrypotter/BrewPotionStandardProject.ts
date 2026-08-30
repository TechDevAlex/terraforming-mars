import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {StandardProjectCard} from '../StandardProjectCard';
import {SelectCard} from '../../inputs/SelectCard';
import {IProjectCard, isIProjectCard} from '../IProjectCard';
import {Size} from '../../../common/cards/render/Size';

export class BrewPotionStandardProject extends StandardProjectCard {
  constructor() {
    super({
      name: CardName.BREW_POTION_STANDARD_PROJECT,
      cost: 0,
      metadata: {
        cardNumber: 'HP-SP1',
        renderData: CardRenderer.builder((b) => {
          b.standardProject('Sacrifice cards to brew a potion. Once per generation.', (eb) => {
            eb.text('X').cards(1).startAction.text('potion', Size.SMALL);
          });
        }),
      },
    });
  }

  /**
   * Calculate ingredient points for a card.
   * Hand card: 1 point
   * Played GREEN (AUTOMATED): 1 per tag
   * Played BLUE (ACTIVE): 2 + 1 per tag
   */
  private static ingredientPoints(card: IProjectCard, isFromHand: boolean): number {
    if (isFromHand) return 1;
    if (card.type === CardType.ACTIVE) return 2 + card.tags.length;
    if (card.type === CardType.AUTOMATED) return card.tags.length;
    return 0;
  }

  private static totalPoints(cards: ReadonlyArray<IProjectCard>, handCards: ReadonlySet<IProjectCard>): number {
    let total = 0;
    for (const card of cards) {
      total += BrewPotionStandardProject.ingredientPoints(card, handCards.has(card));
    }
    return total;
  }

  /**
   * Apply potion rewards based on total ingredient points.
   * 2 pts: Minor — Draw 1 free
   * 3-4 pts: Standard — Draw 2 free
   * 5-6 pts: Greater — Draw 2 free + 3 M€
   * 7+ pts: Felix Felicis — Draw 3 free + 1 TR
   */
  private static applyRewards(player: IPlayer, points: number): void {
    if (points >= 7) {
      // Felix Felicis
      player.drawCard(3);
      player.increaseTerraformRating();
      player.game.log('${0} brewed Felix Felicis (${1} pts): drew 3 cards and gained 1 TR', (b) => b.player(player).number(points));
    } else if (points >= 5) {
      // Greater Potion
      player.drawCard(2);
      player.megaCredits += 3;
      player.game.log('${0} brewed a Greater Potion (${1} pts): drew 2 cards and gained 3 M€', (b) => b.player(player).number(points));
    } else if (points >= 3) {
      // Standard Potion
      player.drawCard(2);
      player.game.log('${0} brewed a Standard Potion (${1} pts): drew 2 cards', (b) => b.player(player).number(points));
    } else if (points >= 2) {
      // Minor Potion
      player.drawCard(1);
      player.game.log('${0} brewed a Minor Potion (${1} pts): drew 1 card', (b) => b.player(player).number(points));
    }
  }

  /**
   * Get all eligible cards: hand cards + played GREEN/BLUE cards (no events, no corps, no preludes, no CEOs).
   */
  private getEligibleCards(player: IPlayer): {all: Array<IProjectCard>, handSet: Set<IProjectCard>} {
    const handCards = player.cardsInHand.slice();
    const playedCards: Array<IProjectCard> = [];
    for (const card of player.playedCards) {
      if (card.type === CardType.AUTOMATED || card.type === CardType.ACTIVE) {
        if (isIProjectCard(card)) {
          playedCards.push(card);
        }
      }
    }
    const handSet = new Set<IProjectCard>(handCards);
    return {all: [...handCards, ...playedCards], handSet};
  }

  public override canAct(player: IPlayer): boolean {
    // Once per generation
    if (player.standardProjectsThisGeneration.has(this.name)) {
      return false;
    }
    // Need at least enough cards to reach 2 points (minimum for Minor Potion)
    const {all, handSet} = this.getEligibleCards(player);
    if (all.length === 0) return false;

    // Check if it's even possible to reach 2 points with available cards
    // Sort by descending point value and see if top cards reach 2
    const pointValues = all.map((card) =>
      BrewPotionStandardProject.ingredientPoints(card, handSet.has(card)),
    ).sort((a, b) => b - a);

    let sum = 0;
    for (const pts of pointValues) {
      sum += pts;
      if (sum >= 2) return true;
    }
    return false;
  }

  actionEssence(): void {
    // no-op — all logic is in action() override
  }

  public override action(player: IPlayer): SelectCard<IProjectCard> {
    const {all, handSet} = this.getEligibleCards(player);

    return new SelectCard(
      'Select cards to sacrifice for potion brewing (min 2 ingredient points needed)',
      'Brew',
      all,
      {max: all.length, min: 1, played: true},
    ).andThen((selectedCards) => {
      const points = BrewPotionStandardProject.totalPoints(selectedCards, handSet);

      if (points < 2) {
        throw new Error('Not enough ingredient points (need at least 2)');
      }

      // Discard selected cards
      for (const card of selectedCards) {
        if (handSet.has(card)) {
          player.discardCardFromHand(card);
        } else {
          player.discardPlayedCard(card);
        }
      }

      this.projectPlayed(player);
      BrewPotionStandardProject.applyRewards(player, points);

      return undefined;
    });
  }
}
