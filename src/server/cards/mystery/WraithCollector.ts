import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class WraithCollector extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.WRAITH_COLLECTOR, tags: [Tag.PLANT, Tag.ANIMAL], cost: 2,
      behavior: {stock: {megacredits: 3}},
      metadata: {cardNumber: 'MY083', renderData: CardRenderer.builder((b) => {b.megacredits(3);}),
        description: 'Gain resources. (The veil lifts.)'},
    });
  }
}
