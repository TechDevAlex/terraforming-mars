import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ExpeditionCamp extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.EXPEDITION_CAMP, tags: [Tag.CITY], cost: 21,
      behavior: {drawCard: 3},
      metadata: {cardNumber: 'MY216', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw 3 cards. (The mystery deepens.)'},
    });
  }
}
