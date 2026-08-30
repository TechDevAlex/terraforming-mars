import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AmbushPoint extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.AMBUSH_POINT, tags: [], cost: 22,
      behavior: {drawCard: 2},
      metadata: {cardNumber: 'MY223', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw 2 cards. (Shadows hide secrets.)'},
    });
  }
}
