import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AncientGrimoire extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.ANCIENT_GRIMOIRE, tags: [Tag.MICROBE, Tag.EARTH], cost: 4,
      behavior: {drawCard: 2},
      metadata: {cardNumber: 'MY074', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw cards. (Progress demands sacrifice.)'},
    });
  }
}
