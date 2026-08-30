import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ForbiddenTomb extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.FORBIDDEN_TOMB, tags: [], cost: 4,
      behavior: {drawCard: 1},
      metadata: {cardNumber: 'MY215', renderData: CardRenderer.builder((b) => {b.cards(1);}),
        description: 'Draw 1 card. (The unknown beckons.)'},
    });
  }
}
