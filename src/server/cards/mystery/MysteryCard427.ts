import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard427 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_427, tags: [Tag.ANIMAL, Tag.SCIENCE], cost: 16,
      behavior: {production: {steel: 1, heat: 2}},
      metadata: {cardNumber: 'MY427', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(1); pb.heat(2);});}),
        description: 'Adjust production. (Time bends.)'},
    });
  }
}
