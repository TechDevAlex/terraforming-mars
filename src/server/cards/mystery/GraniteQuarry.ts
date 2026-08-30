import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GraniteQuarry extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.GRANITE_QUARRY, tags: [], cost: 3,
      behavior: {stock: {megacredits: 4}},
      metadata: {cardNumber: 'MY147', renderData: CardRenderer.builder((b) => {b.megacredits(4);}),
        description: 'Gain resources. (Nothing is as it seems.)'},
    });
  }
}
