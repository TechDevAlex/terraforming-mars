import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard489 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_489, tags: [Tag.EARTH], cost: 5,
      behavior: {drawCard: 1},
      metadata: {cardNumber: 'MY489', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw 1 card. (Steel and will forge the path.)'},
    });
  }
}
