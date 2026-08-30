import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CursedGround extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.CURSED_GROUND, tags: [Tag.SCIENCE], cost: 10,
      behavior: {drawCard: 2},
      metadata: {cardNumber: 'MY066', renderData: CardRenderer.builder((b) => {b.cards(2);}),
        description: 'Draw 2 cards. (Space warps.)'},
    });
  }
}
