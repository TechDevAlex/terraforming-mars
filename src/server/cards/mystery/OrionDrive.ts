import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class OrionDrive extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ORION_DRIVE, tags: [Tag.SCIENCE], cost: 30,
      behavior: {production: {steel: 1, plants: 2, heat: 2}},
      metadata: {cardNumber: 'MY306', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(1); pb.plants(2); pb.heat(2);});}),
        description: 'Adjust production. (Darkness falls.)'},
    });
  }
}
