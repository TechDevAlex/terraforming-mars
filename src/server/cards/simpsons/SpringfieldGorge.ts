import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

export class SpringfieldGorge extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.SPRINGFIELD_GORGE,
      tags: [Tag.MARS],
      cost: 5,

      behavior: {
        stock: {plants: 4},
      },

      metadata: {
        cardNumber: 'SI08',
        renderData: CardRenderer.builder((b) => {
          b.plants(4, {digit});
        }),
        description: 'Gain 4 plants.',
      },
    });
  }
}
