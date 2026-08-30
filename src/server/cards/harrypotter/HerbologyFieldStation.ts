import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class HerbologyFieldStation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.HERBOLOGY_FIELD_STATION, tags: [Tag.PLANT, Tag.SCIENCE], cost: 9,
      behavior: {production: {plants: 2}},
      metadata: {cardNumber: 'HP37', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.plants(2));}),
        description: 'Increase plant production 2 steps. (Professor Sprout insisted every student learn to respect what grows from the earth.)'},
    });
  }
}
