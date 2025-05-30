import {Tag} from '../../../common/cards/Tag';
import {PreludeCard} from './PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class MartianIndustries extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.MARTIAN_INDUSTRIES,
      tags: [Tag.BUILDING],

      behavior: {
        production: {energy: 1, steel: 1},
        stock: {megacredits: 7},
      },

      metadata: {
        cardNumber: 'P18',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1).steel(1)).br;
          b.megacredits(6);
        }),
        description: 'Increase your energy and steel production 1 step. Gain 6 M€.',
      },
    });
  }
}
