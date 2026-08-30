import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SecretSociety extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.SECRET_SOCIETY, tags: [Tag.BUILDING], cost: 6,
      behavior: {production: {plants: 4, megacredits: 2}},
      metadata: {cardNumber: 'MY195', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(4); pb.megacredits(2);});}),
        description: 'Adjust production. (Reality shifts.)'},
    });
  }
}
