import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {StandardProjectCard} from '../StandardProjectCard';
import {SelectCard} from '../../inputs/SelectCard';
import {SelectAmount} from '../../inputs/SelectAmount';
import {AndOptions} from '../../inputs/AndOptions';
import {IProjectCard, isIProjectCard} from '../IProjectCard';
import {Size} from '../../../common/cards/render/Size';
import {Resource} from '../../../common/Resource';

/**
 * Track second-brew usage per generation for players holding Self-stirring Cauldrons.
 * Reset externally via {@link BrewPotionStandardProject.clearGenerationState}.
 */
const secondBrewUsedThisGen = new WeakSet<IPlayer>();

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
   * Reset per-generation tracking. Call at generation start.
   */
  public static clearGenerationState(player: IPlayer) {
    secondBrewUsedThisGen.delete(player);
  }

  /**
   * Calculate ingredient points for a card.
   * Hand card: 1 point (2 if player has Self-stirring Cauldrons)
   * Played GREEN (AUTOMATED): 1 per tag
   * Played BLUE (ACTIVE): 2 + 1 per tag
   */
  private static ingredientPoints(card: IProjectCard, isFromHand: boolean, hasCauldrons: boolean): number {
    if (isFromHand) return hasCauldrons ? 2 : 1;
    if (card.type === CardType.ACTIVE) return 2 + card.tags.length;
    if (card.type === CardType.AUTOMATED) return card.tags.length;
    return 0;
  }

  private static totalPoints(cards: ReadonlyArray<IProjectCard>, handCards: ReadonlySet<IProjectCard>, hasCauldrons: boolean): number {
    let total = 0;
    for (const card of cards) {
      total += BrewPotionStandardProject.ingredientPoints(card, handCards.has(card), hasCauldrons);
    }
    return total;
  }

  private static applyRewards(player: IPlayer, points: number): void {
    if (points >= 8) {
      player.drawCard(3);
      player.increaseTerraformRating();
      player.game.log('${0} brewed Felix Felicis (${1} pts): drew 3 cards and gained 1 TR', (b) => b.player(player).number(points));
    } else if (points >= 5) {
      player.drawCard(2);
      player.megaCredits += 3;
      player.game.log('${0} brewed a Greater Potion (${1} pts): drew 2 cards and gained 3 M€', (b) => b.player(player).number(points));
    } else if (points >= 3) {
      player.drawCard(2);
      player.game.log('${0} brewed a Standard Potion (${1} pts): drew 2 cards', (b) => b.player(player).number(points));
    } else if (points >= 2) {
      player.drawCard(1);
      player.game.log('${0} brewed a Minor Potion (${1} pts): drew 1 card', (b) => b.player(player).number(points));
    }
  }

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

  private hasCauldrons(player: IPlayer): boolean {
    return player.playedCards.some((c) => c.name === CardName.SELF_STIRRING_CAULDRONS);
  }

  private hasHerbologyStation(player: IPlayer): boolean {
    return player.playedCards.some((c) => c.name === CardName.HERBOLOGY_FIELD_STATION);
  }

  private allowedThisGen(player: IPlayer): boolean {
    const usedFirst = player.standardProjectsThisGeneration.has(this.name);
    if (!usedFirst) return true;
    // First brew already used this generation. Allow a second brew if the player has
    // Self-stirring Cauldrons and hasn't already used the bonus brew this generation.
    return this.hasCauldrons(player) && !secondBrewUsedThisGen.has(player);
  }

  public override canAct(player: IPlayer): boolean {
    if (!this.allowedThisGen(player)) return false;
    const {all, handSet} = this.getEligibleCards(player);
    const hasCauldrons = this.hasCauldrons(player);
    const hasHerb = this.hasHerbologyStation(player);
    const potentialPlantPoints = hasHerb ? player.plants * 2 : 0;
    if (all.length === 0 && potentialPlantPoints < 2) return false;

    const pointValues = all.map((card) =>
      BrewPotionStandardProject.ingredientPoints(card, handSet.has(card), hasCauldrons),
    ).sort((a, b) => b - a);

    let sum = potentialPlantPoints;
    if (sum >= 2) return true;
    for (const pts of pointValues) {
      sum += pts;
      if (sum >= 2) return true;
    }
    return false;
  }

  actionEssence(): void {
    // no-op — all logic is in action() override
  }

  public override action(player: IPlayer): AndOptions | SelectCard<IProjectCard> {
    const {all, handSet} = this.getEligibleCards(player);
    const hasCauldrons = this.hasCauldrons(player);
    const hasHerb = this.hasHerbologyStation(player);

    const finalize = (selectedCards: ReadonlyArray<IProjectCard>, plantsToSpend: number) => {
      const cardPoints = BrewPotionStandardProject.totalPoints(selectedCards, handSet, hasCauldrons);
      const plantPoints = plantsToSpend * 2;
      const points = cardPoints + plantPoints;

      if (points < 2) throw new Error('Not enough ingredient points (need at least 2)');
      if (plantsToSpend > player.plants) throw new Error('Not enough plants');

      for (const card of selectedCards) {
        if (handSet.has(card)) player.discardCardFromHand(card);
        else player.discardPlayedCard(card);
      }
      if (plantsToSpend > 0) {
        player.stock.deduct(Resource.PLANTS, plantsToSpend, {log: true});
      }

      // Track first vs second brew this generation
      if (player.standardProjectsThisGeneration.has(this.name)) {
        secondBrewUsedThisGen.add(player);
        player.game.log('${0} used Self-stirring Cauldrons for a bonus potion brew this generation', (b) => b.player(player));
      } else {
        this.projectPlayed(player);
      }

      BrewPotionStandardProject.applyRewards(player, points);
      return undefined;
    };

    if (hasHerb && player.plants > 0) {
      let selectedCards: ReadonlyArray<IProjectCard> = [];
      let plantsToSpend = 0;
      const cardSelector = new SelectCard(
        'Select cards to sacrifice for potion brewing (min 2 total ingredient points)',
        'Brew',
        all,
        {max: all.length, min: 0, played: true},
      ).andThen((cards) => {
        selectedCards = cards;
        return undefined;
      });
      const plantsSelector = new SelectAmount('Plants to spend (each is worth 2 potion points)', 'Spend', 0, player.plants)
        .andThen((n) => {
          plantsToSpend = n;
          return undefined;
        });
      return new AndOptions(cardSelector, plantsSelector).andThen(() => finalize(selectedCards, plantsToSpend));
    }

    return new SelectCard(
      'Select cards to sacrifice for potion brewing (min 2 ingredient points needed)',
      'Brew',
      all,
      {max: all.length, min: 1, played: true},
    ).andThen((selectedCards) => finalize(selectedCards, 0));
  }
}
