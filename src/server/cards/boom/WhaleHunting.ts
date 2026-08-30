import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';

export class WhaleHunting extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.WHALE_HUNTING,
      tags: [Tag.ANIMAL, Tag.EARTH],
      cost: 10,

      behavior: {
        stock: {megacredits: 4},
      },

      metadata: {
        cardNumber: 'BM03',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(4);
        }),
        description: 'Gain 4 M€. (The hunt is on!)',
      },
    });
  }
}
