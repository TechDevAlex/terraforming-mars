import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class RealityAnchor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.REALITY_ANCHOR, tags: [Tag.SCIENCE], cost: 20,
      victoryPoints: 3,
      behavior: {drawCard: 1},
      metadata: {cardNumber: 'MY315', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw 1 card. 3 VP. (The frontier expands.)'},
    });
  }
}
