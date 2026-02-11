import {Tag} from '../../../common/cards/Tag';
import {IPlayer} from '../../IPlayer';
import {PreludeCard} from './PreludeCard';
import {CardName} from '../../../common/cards/CardName';
import {SelectPaymentDeferred} from '../../deferredActions/SelectPaymentDeferred';
import {CardRenderer} from '../render/CardRenderer';
import {PathfindersExpansion} from '../../pathfinders/PathfindersExpansion';

export class BusinessEmpire extends PreludeCard {
  constructor() {
    super({
      name: CardName.BUSINESS_EMPIRE,
      tags: [Tag.EARTH],

      behavior: {
        production: {megacredits: 6},
      },
      startingMegacredits: -3,

      metadata: {
        cardNumber: 'P06',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(6)).br;
          b.megacredits(-3);
        }),
        description: 'Increase your M€ production 6 steps. Pay 3 M€.',
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer) {
    if (player.tableau.has(CardName.MANUTECH)) return true;
    return player.canAfford(3);
  }
  public override bespokePlay(player: IPlayer) {
    player.game.defer(new SelectPaymentDeferred(player, -this.startingMegaCredits)).andThen(() => {
      PathfindersExpansion.addToSolBank(player);
    });
    return undefined;
  }
}

