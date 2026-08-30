import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard461 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_461, tags: [Tag.POWER], cost: 13,
      behavior: {drawCard: 2},
      metadata: {cardNumber: 'MY461', renderData: CardRenderer.builder((b) => {b.cards(2);}),
        description: 'Draw 2 cards. (Progress demands sacrifice.)'},
    });
  }
}
