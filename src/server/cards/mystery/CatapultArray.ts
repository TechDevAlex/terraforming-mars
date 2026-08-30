import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CatapultArray extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CATAPULT_ARRAY, tags: [Tag.EARTH], cost: 16,
      behavior: {greenery: {}},
      metadata: {cardNumber: 'MY227', renderData: CardRenderer.builder((b) => {b.text('Place greenery.');}),
        description: 'Place greenery. (The frontier expands.)'},
    });
  }
}
