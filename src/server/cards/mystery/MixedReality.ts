import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MixedReality extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MIXED_REALITY, tags: [Tag.POWER, Tag.BUILDING], cost: 5,
      behavior: {drawCard: 2},
      metadata: {cardNumber: 'MY354', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw 2 cards. (Darkness falls.)'},
    });
  }
}
