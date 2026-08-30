import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BaseCamp extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BASE_CAMP, tags: [Tag.CITY], cost: 18,
      behavior: {production: {steel: 1, energy: 2}},
      metadata: {cardNumber: 'MY217', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(1); pb.energy(2);});}),
        description: 'Adjust production. (The truth is out there.)'},
    });
  }
}
