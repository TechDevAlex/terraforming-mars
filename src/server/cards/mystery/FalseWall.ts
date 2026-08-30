import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FalseWall extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.FALSE_WALL, tags: [Tag.POWER], cost: 4,
      victoryPoints: 3,
      behavior: {production: {plants: 2, heat: 1}},
      metadata: {cardNumber: 'MY254', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Space warps.)'},
    });
  }
}
