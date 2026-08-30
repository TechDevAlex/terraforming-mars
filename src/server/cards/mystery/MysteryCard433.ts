import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard433 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_433, tags: [Tag.CITY, Tag.SPACE], cost: 8,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY433', renderData: CardRenderer.builder((b) => {b.oceans(1);}),
        description: 'Place an ocean. (The plot thickens.)'},
    });
  }
}
