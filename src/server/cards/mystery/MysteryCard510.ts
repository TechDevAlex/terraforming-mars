import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard510 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_510, tags: [Tag.PLANT], cost: 15,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY510', renderData: CardRenderer.builder((b) => {b.text('Place an ocean.');}),
        description: 'Place an ocean. (Steel and will forge the path.)'},
    });
  }
}
