import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ProbabilityEngine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.PROBABILITY_ENGINE, tags: [Tag.JOVIAN, Tag.ANIMAL], cost: 4,
      behavior: {stock: {megacredits: 4}},
      metadata: {cardNumber: 'MY316', renderData: CardRenderer.builder((b) => {b.megacredits(4);}),
        description: 'Gain resources. (Shadows hide secrets.)'},
    });
  }
}
