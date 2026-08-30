import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DejaVu extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.DEJA_VU, tags: [Tag.SPACE, Tag.MICROBE], cost: 6,
      behavior: {drawCard: 1},
      metadata: {cardNumber: 'MY358', renderData: CardRenderer.builder((b) => {b.cards(1);}),
        description: 'Draw 1 card. (Knowledge is the ultimate currency.)'},
    });
  }
}
