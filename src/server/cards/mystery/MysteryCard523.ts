import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard523 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_523, tags: [Tag.EARTH], cost: 11,
      victoryPoints: 3,
      behavior: {production: {megacredits: 1}},
      metadata: {cardNumber: 'MY523', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: '3 VP. (Secrets have power.)'},
    });
  }
}
