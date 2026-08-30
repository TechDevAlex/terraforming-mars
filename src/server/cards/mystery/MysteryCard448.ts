import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard448 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_448, tags: [Tag.EARTH, Tag.SCIENCE], cost: 3,
      behavior: {stock: {steel: 2}},
      metadata: {cardNumber: 'MY448', renderData: CardRenderer.builder((b) => {b.steel(2);}),
        description: 'Gain resources. (The veil lifts.)'},
    });
  }
}
