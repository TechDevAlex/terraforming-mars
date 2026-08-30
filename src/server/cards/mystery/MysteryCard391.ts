import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard391 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_391, tags: [Tag.SPACE, Tag.ANIMAL], cost: 16,
      victoryPoints: -2,
      behavior: {production: {titanium: 2}},
      metadata: {cardNumber: 'MY391', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(2);});}),
        description: '-2 VP. (Progress demands sacrifice.)'},
    });
  }
}
