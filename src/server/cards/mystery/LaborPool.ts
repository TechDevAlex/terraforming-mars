import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class LaborPool extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.LABOR_POOL, tags: [Tag.CITY], cost: 19,
      behavior: {production: {plants: 1, heat: 2}},
      metadata: {cardNumber: 'MY164', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(1); pb.heat(2);});}),
        description: 'Adjust production. (The veil lifts.)'},
    });
  }
}
