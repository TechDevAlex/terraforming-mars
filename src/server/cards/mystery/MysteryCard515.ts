import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard515 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_515, tags: [Tag.MARS], cost: 7,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY515', renderData: CardRenderer.builder((b) => {b.oceans(1);}),
        description: 'Place an ocean. (Reality shifts.)'},
    });
  }
}
