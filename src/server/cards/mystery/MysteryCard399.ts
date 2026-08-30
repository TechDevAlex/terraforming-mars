import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard399 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_399, tags: [Tag.EARTH, Tag.BUILDING], cost: 5,
      victoryPoints: 1,
      behavior: {drawCard: 1},
      metadata: {cardNumber: 'MY399', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw 1 card. 1 VP. (Progress demands sacrifice.)'},
    });
  }
}
