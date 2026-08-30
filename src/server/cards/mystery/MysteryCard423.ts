import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard423 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_423, tags: [Tag.SPACE, Tag.MICROBE], cost: 25,
      behavior: {production: {plants: 2, energy: 1, megacredits: 1}},
      metadata: {cardNumber: 'MY423', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(2); pb.energy(1); pb.megacredits(1);});}),
        description: 'Adjust production. (Nothing is as it seems.)'},
    });
  }
}
