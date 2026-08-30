import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard505 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_505, tags: [Tag.MICROBE, Tag.JOVIAN], cost: 15,
      victoryPoints: -2,
      behavior: {city: {}, production: {megacredits: 3}},
      metadata: {cardNumber: 'MY505', renderData: CardRenderer.builder((b) => {b.text('Place city, gain production.');}),
        description: '-2 VP. (Trust no one.)'},
    });
  }
}
