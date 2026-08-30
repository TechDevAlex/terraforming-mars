import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard481 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_481, tags: [Tag.POWER], cost: 4,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY481', renderData: CardRenderer.builder((b) => {b.text('Place an ocean.');}),
        description: 'Place an ocean. (Steel and will forge the path.)'},
    });
  }
}
