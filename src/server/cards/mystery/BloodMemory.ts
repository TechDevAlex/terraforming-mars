import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BloodMemory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BLOOD_MEMORY, tags: [Tag.MARS], cost: 24,
      behavior: {production: {energy: 2}},
      metadata: {cardNumber: 'MY346', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(2);});}),
        description: 'Adjust production. (Steel and will forge the path.)'},
    });
  }
}
