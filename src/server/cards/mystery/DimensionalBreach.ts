import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DimensionalBreach extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DIMENSIONAL_BREACH, tags: [Tag.SCIENCE, Tag.MARS], cost: 35,
      behavior: {production: {titanium: 2, steel: 2}},
      metadata: {cardNumber: 'MY038', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(2); pb.steel(2);});}),
        description: 'Adjust production. (Secrets have power.)'},
    });
  }
}
