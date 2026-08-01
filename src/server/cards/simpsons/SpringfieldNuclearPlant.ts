import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class SpringfieldNuclearPlant extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SPRINGFIELD_NUCLEAR_PLANT,
      tags: [Tag.POWER, Tag.BUILDING],
      cost: 11,

      behavior: {
        production: {energy: 3, plants: -1},
      },

      metadata: {
        cardNumber: 'SI01',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(3).plants(-1));
        }),
        description: 'Increase your energy production 3 steps. Decrease your plant production 1 step.',
      },
    });
  }
}
