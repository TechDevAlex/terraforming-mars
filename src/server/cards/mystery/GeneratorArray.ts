import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GeneratorArray extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.GENERATOR_ARRAY, tags: [Tag.EARTH], cost: 3,
      behavior: {stock: {plants: 3}},
      metadata: {cardNumber: 'MY174', renderData: CardRenderer.builder((b) => {b.plants(3);}),
        description: 'Gain resources. (Darkness falls.)'},
    });
  }
}
