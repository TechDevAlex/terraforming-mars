import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard410 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_410, tags: [Tag.POWER], cost: 10,
      victoryPoints: 3,
      behavior: {production: {energy: 2}},
      metadata: {cardNumber: 'MY410', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(2);});}),
        description: '3 VP. (Knowledge is the ultimate currency.)'},
    });
  }
}
