import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TheStranger extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.THE_STRANGER, tags: [Tag.MARS, Tag.SCIENCE], cost: 10,
      behavior: {drawCard: 3},
      metadata: {cardNumber: 'MY249', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw 3 cards. (Shadows hide secrets.)'},
    });
  }
}
