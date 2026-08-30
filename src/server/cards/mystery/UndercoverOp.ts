import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class UndercoverOp extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.UNDERCOVER_OP, tags: [Tag.BUILDING], cost: 6,
      behavior: {stock: {plants: 4}},
      metadata: {cardNumber: 'MY012', renderData: CardRenderer.builder((b) => {b.plants(4);}),
        description: 'Gain resources. (Reality shifts.)'},
    });
  }
}
