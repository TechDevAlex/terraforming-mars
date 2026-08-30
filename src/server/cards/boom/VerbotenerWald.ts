import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';

export class VerbotenerWald extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.VERBOTENER_WALD,
      tags: [Tag.PLANT, Tag.MARS],
      cost: 14,

      behavior: {
        greenery: {},
        stock: {plants: 4},
      },

      metadata: {
        cardNumber: 'BM10',
        renderData: CardRenderer.builder((b) => {
          b.greenery().plants(4);
        }),
        description: 'Place a greenery tile. Gain 4 plants.',
      },
    });
  }
}
