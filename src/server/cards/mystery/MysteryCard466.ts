import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard466 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_466, tags: [Tag.ANIMAL, Tag.CITY], cost: 19,
      victoryPoints: 1,
      behavior: {tr: 1, production: {steel: 2}},
      metadata: {cardNumber: 'MY466', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'Raise your TR 1 step. 1 VP. (Steel and will forge the path.)'},
    });
  }
}
