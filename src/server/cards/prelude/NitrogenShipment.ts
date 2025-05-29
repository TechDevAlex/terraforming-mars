import {PreludeCard} from './PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class NitrogenShipment extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.NITROGEN_SHIPMENT,

      behavior: {
        production: {plants: 1},
        tr: 2,
        stock: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'P24',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).tr(2).br;
          b.megacredits(2);
        }),
        description: 'Increase your plant production 1 step. Increase your TR 1 step. Gain 2 M€.',
      },
    });
  }
}
