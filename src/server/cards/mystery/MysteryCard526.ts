import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard526 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_526, tags: [Tag.SPACE, Tag.PLANT], cost: 20,
      behavior: {drawCard: 1},
      metadata: {cardNumber: 'MY526', renderData: CardRenderer.builder((b) => {b.cards(1);}),
        description: 'Draw 1 card. (Darkness falls.)'},
    });
  }
}
