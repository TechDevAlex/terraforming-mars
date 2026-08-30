import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DirtyMoney extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.DIRTY_MONEY, tags: [Tag.EARTH, Tag.MARS], cost: 21,
      victoryPoints: 2,
      behavior: {drawCard: 1},
      metadata: {cardNumber: 'MY019', renderData: CardRenderer.builder((b) => {b.cards(1);}),
        description: 'Draw 1 card. 2 VP. (Trust no one.)'},
    });
  }
}
