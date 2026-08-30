import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CollectiveConsciousness extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.COLLECTIVE_CONSCIOUSNESS, tags: [Tag.ANIMAL, Tag.MARS], cost: 15,
      victoryPoints: 3,
      behavior: {drawCard: 1},
      metadata: {cardNumber: 'MY331', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw cards. (Progress demands sacrifice.)'},
    });
  }
}
