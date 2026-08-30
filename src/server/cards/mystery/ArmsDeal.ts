import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ArmsDeal extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ARMS_DEAL, tags: [Tag.BUILDING], cost: 27,
      behavior: {production: {plants: 2, heat: 2}},
      metadata: {cardNumber: 'MY203', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(2); pb.heat(2);});}),
        description: 'Adjust production. (Shadows hide secrets.)'},
    });
  }
}
