import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard431 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_431, tags: [Tag.SCIENCE], cost: 23,
      victoryPoints: 1,
      behavior: {production: {titanium: 2}},
      metadata: {cardNumber: 'MY431', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(2);});}),
        description: '1 VP. (The veil lifts.)'},
    });
  }
}
