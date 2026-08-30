import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FalseWall extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.FALSE_WALL, tags: [Tag.POWER], cost: 25,
      victoryPoints: 3,
      behavior: {production: {plants: 2, heat: 1}},
      metadata: {cardNumber: 'MY254', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(2); pb.heat(1);});}),
        description: '3 VP. (Space warps.)'},
    });
  }
}
