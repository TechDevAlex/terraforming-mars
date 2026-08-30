import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FaradayCage extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.FARADAY_CAGE, tags: [Tag.PLANT, Tag.SPACE], cost: 17,
      victoryPoints: -2,
      behavior: {production: {energy: 2, plants: 4}},
      metadata: {cardNumber: 'MY278', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(2); pb.plants(4);});}),
        description: '-2 VP. (The truth is out there.)'},
    });
  }
}
