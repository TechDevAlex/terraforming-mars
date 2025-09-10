import {CorporationCard} from '../corporation/CorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';
import {ICorporationCard} from '../corporation/ICorporationCard';

export class Midas extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.MIDAS,
      startingMegaCredits: 110,

      behavior: {
        tr: -6,
      },

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
}
