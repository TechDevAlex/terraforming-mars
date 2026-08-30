import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard507 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_507, tags: [Tag.PLANT], cost: 20,
      behavior: {stock: {titanium: 5}},
      metadata: {cardNumber: 'MY507', renderData: CardRenderer.builder((b) => {b.text('Gain resources.');}),
        description: 'Gain resources. (The veil lifts.)'},
    });
  }
}
