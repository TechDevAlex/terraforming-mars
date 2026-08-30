import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class InsideJob extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.INSIDE_JOB, tags: [Tag.BUILDING, Tag.EARTH], cost: 22,
      behavior: {drawCard: 1},
      metadata: {cardNumber: 'MY024', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw 1 card. (The truth is out there.)'},
    });
  }
}
