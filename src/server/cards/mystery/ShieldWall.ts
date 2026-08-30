import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ShieldWall extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SHIELD_WALL, tags: [], cost: 14,
      behavior: {stock: {titanium: 3}},
      metadata: {cardNumber: 'MY228', renderData: CardRenderer.builder((b) => {b.titanium(3);}),
        description: 'Gain resources. (Shadows hide secrets.)'},
    });
  }
}
