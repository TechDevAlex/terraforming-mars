import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';

export class GanymedeExpedition extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.GANYMEDE_EXPEDITION,
      cost: 10,
      tags: [Tag.JOVIAN],
      type: CardType.EVENT,

      requirements: {tag: Tag.JOVIAN, count: 2},

      behavior: {
        stock: {
          steel: 4,
        },
        drawCard: {count: 2, tag: Tag.JOVIAN},
      },

      metadata: {
        cardNumber: 'P76',
        renderData: CardRenderer.builder((b) => {
          b.steel(4).cards(2, {secondaryTag: Tag.JOVIAN});
        }),
        description: 'Requires 2 Jovian Tags. Gain 4 steel and draw 2 Jovian cards.',
      },
    });
  }
}
