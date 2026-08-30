import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ThermalSpring extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.THERMAL_SPRING, tags: [Tag.POWER], cost: 13,
      behavior: {production: {energy: 1, plants: 2}},
      metadata: {cardNumber: 'MY143', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(1); pb.plants(2);});}),
        description: 'Adjust production. (Steel and will forge the path.)'},
    });
  }
}
