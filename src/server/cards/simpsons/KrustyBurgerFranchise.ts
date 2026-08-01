import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class KrustyBurgerFranchise extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.KRUSTY_BURGER_FRANCHISE,
      tags: [Tag.BUILDING, Tag.EARTH],
      cost: 14,

      cardDiscount: {tag: Tag.EARTH, amount: 2},

      metadata: {
        cardNumber: 'SI02',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play an Earth tag, you pay 2 M€ less for it.', (eb) => {
            eb.tag(Tag.EARTH).startEffect.megacredits(-2);
          });
        }),
        description: 'Effect: When you play an Earth tag, you pay 2 M€ less for it.',
      },
    });
  }
}
