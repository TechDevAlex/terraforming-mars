import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FocusGroup extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.FOCUS_GROUP, tags: [Tag.MARS], cost: 3,
      behavior: {stock: {megacredits: 4}},
      metadata: {cardNumber: 'MY190', renderData: CardRenderer.builder((b) => {b.megacredits(4);}),
        description: 'Gain resources. (The veil lifts.)'},
    });
  }
}
