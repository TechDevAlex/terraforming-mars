import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard488 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_488, tags: [], cost: 12,
      behavior: {stock: {titanium: 5}},
      metadata: {cardNumber: 'MY488', renderData: CardRenderer.builder((b) => {b.titanium(5);}),
        description: 'Gain resources. (Trust no one.)'},
    });
  }
}
