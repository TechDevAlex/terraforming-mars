import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class LardLadDonuts extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.LARD_LAD_DONUTS,
      tags: [Tag.PLANT],
      cost: 8,

      behavior: {
        production: {plants: 1},
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'SI18',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1)).plants(2);
        }),
        description: 'Increase your plant production 1 step. Gain 2 plants.',
      },
    });
  }
}
