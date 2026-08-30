import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BuriedTreasure extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BURIED_TREASURE, tags: [Tag.CITY, Tag.SCIENCE], cost: 23,
      victoryPoints: 3,
      behavior: {production: {steel: 1, plants: 1}},
      metadata: {cardNumber: 'MY266', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: '3 VP. (Reality shifts.)'},
    });
  }
}
