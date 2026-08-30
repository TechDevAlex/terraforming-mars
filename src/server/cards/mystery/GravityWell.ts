import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GravityWell extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.GRAVITY_WELL, tags: [Tag.SPACE, Tag.JOVIAN], cost: 1,
      victoryPoints: -2,
      behavior: {production: {energy: 1}},
      metadata: {cardNumber: 'MY039', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(1);});}),
        description: '-2 VP. (The veil lifts.)'},
    });
  }
}
