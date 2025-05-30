import {Tag} from '../../../common/cards/Tag';
import {IPlayer} from '../../IPlayer';
import {CorporationCard} from '../corporation/CorporationCard';
import {IProjectCard} from '../IProjectCard';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {IAward} from '../../awards/IAward';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Resource} from '../../../common/Resource';
import {message} from '../../logs/MessageBuilder';

export class Vitor extends CorporationCard {
  constructor() {
    super({
      name: CardName.VITOR,
      tags: [Tag.EARTH],
      startingMegaCredits: 49, // It's 47 + 2 when this corp is played
      initialActionText: 'Fund an award for free',

      metadata: {
        cardNumber: 'R35',
        description: 'You start with 47 M€. As your first action, fund an award for free.',
        renderData: CardRenderer.builder((b) => {
          b.br.br;
          b.megacredits(47).nbsp.award();
          b.corpBox('effect', (ce) => {
            ce.effect('When you play a card with a NON-NEGATIVE VP icon, including this, gain 2 M€.', (eb) => {
              eb.vpIcon().asterix().startEffect.megacredits(2);
            });
          });
        }),
      },
    });
  }

  private selectAwardToFund(player: IPlayer, award: IAward): SelectOption {
    return new SelectOption(message('Fund ${0} award', (b) => b.award(award))).andThen(() => {
      player.game.fundAward(player, award);
      return undefined;
    });
  }

  public initialAction(player: IPlayer) {
    const game = player.game;

    // Awards are disabled for 1 player games
    if (game.isSoloMode()) return;

    const freeAward = new OrOptions();
    freeAward.title = 'Select award to fund';
    freeAward.buttonLabel = 'Confirm';

    // If Vitor isn't going first and someone else funds awards, filter them out.
    const availableAwards = game.awards.filter((award) => !game.fundedAwards.map((fa) => fa.award).includes(award));
    freeAward.options = availableAwards.map((award) => this.selectAwardToFund(player, award));

    return freeAward;
  }

  public onCardPlayed(player: IPlayer, card: IProjectCard) {
    if (!player.isCorporation(this.name)) {
      return;
    }
    const victoryPoints = card.metadata.victoryPoints;
    if (victoryPoints === undefined) return;
    if (typeof(victoryPoints) === 'number') {
      if (victoryPoints <= 0) return;
    } else {
      // victoryPoints type is CardRenderDynamicVictoryPoints
      if (victoryPoints.points <= 0) return;
    }

    player.stock.add(Resource.MEGACREDITS, 2, {log: true, from: this});
  }
}
