import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class NectarOfOblivion extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.NECTAR_OF_OBLIVION, tags: [Tag.CITY], cost: 11,
      victoryPoints: 1,
      behavior: {greenery: {}},
      metadata: {cardNumber: 'MY086', renderData: CardRenderer.builder((b) => {b.greenery();}),
        description: '1 VP. (Time bends.)'},
    });
  }
}
