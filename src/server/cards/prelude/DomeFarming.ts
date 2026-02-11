import {Tag} from '../../../common/cards/Tag';
import {PreludeCard} from './PreludeCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class DomeFarming extends PreludeCard {
  constructor() {
    super({
      name: CardName.DOME_FARMING,
      tags: [Tag.PLANT, Tag.BUILDING],

      behavior: {
        production: {megacredits: 2, plants: 1},
        stock: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'P07',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2).plants(1));
          b.megacredits(2).br;
          
        }),
        description: 'Increase your M€ production 2 steps and plant production 1 step. Gain 2 megacredits.',
      },
    });
  }
}
