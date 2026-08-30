import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TheFence extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.THE_FENCE, tags: [Tag.BUILDING], cost: 12,
      victoryPoints: -2,
      behavior: {stock: {titanium: 3}},
      metadata: {cardNumber: 'MY025', renderData: CardRenderer.builder((b) => {b.text('Gain resources.');}),
        description: '-2 VP. (Progress demands sacrifice.)'},
    });
  }
}
