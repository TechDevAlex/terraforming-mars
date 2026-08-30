import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class JammingStation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.JAMMING_STATION, tags: [Tag.PLANT], cost: 15,
      victoryPoints: 1,
      behavior: {city: {}, production: {megacredits: 2}},
      metadata: {cardNumber: 'MY096', renderData: CardRenderer.builder((b) => {b.text('Place city, gain production.');}),
        description: 'Place city, gain production. (Knowledge is the ultimate currency.)'},
    });
  }
}
