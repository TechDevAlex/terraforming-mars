import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard430 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_430, tags: [Tag.SPACE], cost: 18,
      victoryPoints: 1,
      behavior: {production: {megacredits: 2}},
      metadata: {cardNumber: 'MY430', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(2);});}),
        description: '1 VP. (Every clue matters.)'},
    });
  }
}
