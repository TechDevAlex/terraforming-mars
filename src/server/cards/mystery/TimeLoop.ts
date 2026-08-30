import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TimeLoop extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.TIME_LOOP, tags: [], cost: 12,
      behavior: {drawCard: 3},
      metadata: {cardNumber: 'MY356', renderData: CardRenderer.builder((b) => {b.cards(3);}),
        description: 'Draw 3 cards. (Progress demands sacrifice.)'},
    });
  }
}
