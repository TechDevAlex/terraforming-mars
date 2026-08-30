import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class DiagonAlleyShops extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.DIAGON_ALLEY_SHOPS,
      tags: [Tag.BUILDING, Tag.EARTH],
      cost: 14,

      cardDiscount: {tag: Tag.EARTH, amount: 2},

      metadata: {
        cardNumber: 'HP02',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play an Earth tag, you pay 2 M€ less for it.', (eb) => {
            eb.tag(Tag.EARTH).startEffect.megacredits(-2);
          });
        }),
        description: 'Effect: When you play an Earth tag, you pay 2 M€ less for it. (Diagon Alley — the cobblestoned wizarding high street, home to Ollivanders, Flourish & Blotts, and every shop a young witch or wizard could dream of.)',
      },
    });
  }
}
