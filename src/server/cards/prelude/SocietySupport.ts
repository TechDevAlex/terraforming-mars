import {PreludeCard} from './PreludeCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class SocietySupport extends PreludeCard {
  constructor() {
    super({
      name: CardName.SOCIETY_SUPPORT,

      behavior: {
        production: {plants: 2, energy: 2, heat: 2, megacredits: -2},
      },

      metadata: {
        cardNumber: 'P31',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(-2).plants(2).br;
            pb.energy(2).heat(2);
          });
        }),
        description: 'Increase your plant, energy and heat production 2 step. Decrease M€ production 2 step.',
      },
    });
  }
}
