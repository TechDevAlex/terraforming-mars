import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class LaserArray extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.LASER_ARRAY, tags: [Tag.SCIENCE, Tag.POWER], cost: 32,
      victoryPoints: 1,
      behavior: {production: {megacredits: 2, titanium: 2}},
      metadata: {cardNumber: 'MY284', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(2); pb.titanium(2);});}),
        description: '1 VP. (Time bends.)'},
    });
  }
}
