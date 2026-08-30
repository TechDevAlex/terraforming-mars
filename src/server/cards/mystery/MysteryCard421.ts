import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard421 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_421, tags: [Tag.SCIENCE], cost: 13,
      behavior: {production: {steel: 1, heat: 1}},
      metadata: {cardNumber: 'MY421', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(1); pb.heat(1);});}),
        description: 'Adjust production. (The veil lifts.)'},
    });
  }
}
