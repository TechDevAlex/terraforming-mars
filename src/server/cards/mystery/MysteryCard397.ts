import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard397 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_397, tags: [Tag.SPACE], cost: 8,
      behavior: {greenery: {}},
      metadata: {cardNumber: 'MY397', renderData: CardRenderer.builder((b) => {b.greenery();}),
        description: 'Place greenery. (A whisper in the void.)'},
    });
  }
}
