import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FractalGrowth extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.FRACTAL_GROWTH, tags: [Tag.SCIENCE], cost: 18,
      behavior: {production: {megacredits: 2, plants: 1}},
      metadata: {cardNumber: 'MY321', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(2); pb.plants(1);});}),
        description: 'Adjust production. (Innovation breeds opportunity.)'},
    });
  }
}
