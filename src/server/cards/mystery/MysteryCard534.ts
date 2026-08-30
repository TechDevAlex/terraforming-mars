import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard534 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_534, tags: [], cost: 6,
      behavior: {stock: {plants: 4}},
      metadata: {cardNumber: 'MY534', renderData: CardRenderer.builder((b) => {b.plants(4);}),
        description: 'Gain resources. (Space warps.)'},
    });
  }
}
