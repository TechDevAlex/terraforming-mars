import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard525 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_525, tags: [Tag.JOVIAN], cost: 20,
      victoryPoints: 2,
      behavior: {city: {}, production: {megacredits: 2}},
      metadata: {cardNumber: 'MY525', renderData: CardRenderer.builder((b) => {b.text('Place city, gain production.');}),
        description: '2 VP. (Every clue matters.)'},
    });
  }
}
