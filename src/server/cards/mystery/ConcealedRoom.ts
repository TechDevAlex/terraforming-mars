import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ConcealedRoom extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CONCEALED_ROOM, tags: [Tag.ANIMAL, Tag.BUILDING], cost: 21,
      behavior: {production: {plants: 1}},
      metadata: {cardNumber: 'MY255', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (The frontier expands.)'},
    });
  }
}
