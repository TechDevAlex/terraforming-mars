import {CorporationCard} from '../corporation/CorporationCard';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';

export class Midas extends CorporationCard {
  constructor() {
    super({
      name: CardName.MIDAS,
      startingMegaCredits: 110,

      metadata: {
        cardNumber: 'R41',
        description: 'You start with 110 M€. Lower your TR 6 steps.',
        renderData: CardRenderer.builder((b) => {
          b.vSpace(Size.LARGE).br;
          b.megacredits(110, {size: Size.LARGE}).nbsp.nbsp.nbsp;
          b.minus().tr(6);
        }),
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    player.decreaseTerraformRating(6);
    return undefined;
  }
}
