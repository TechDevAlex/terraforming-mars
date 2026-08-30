import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard436 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_436, tags: [Tag.BUILDING, Tag.SCIENCE], cost: 21,
      victoryPoints: -1,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY436', renderData: CardRenderer.builder((b) => {b.text('Place an ocean.');}),
        description: '-1 VP. (Shadows hide secrets.)'},
    });
  }
}
