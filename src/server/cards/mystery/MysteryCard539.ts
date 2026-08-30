import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard539 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_539, tags: [Tag.PLANT, Tag.MARS], cost: 3,
      behavior: {stock: {titanium: 3}},
      metadata: {cardNumber: 'MY539', renderData: CardRenderer.builder((b) => {b.titanium(3);}),
        description: 'Gain resources. (The stars align.)'},
    });
  }
}
