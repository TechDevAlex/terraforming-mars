import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard371 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_371, tags: [], cost: 7,
      behavior: {city: {}, production: {megacredits: 3}},
      metadata: {cardNumber: 'MY371', renderData: CardRenderer.builder((b) => {b.text('Place city, gain production.');}),
        description: 'Place city, gain production. (Reality shifts.)'},
    });
  }
}
