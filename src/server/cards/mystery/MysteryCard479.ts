import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard479 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_479, tags: [Tag.ANIMAL, Tag.MICROBE], cost: 20,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY479', renderData: CardRenderer.builder((b) => {b.text('Place an ocean.');}),
        description: 'Place an ocean. (The frontier expands.)'},
    });
  }
}
