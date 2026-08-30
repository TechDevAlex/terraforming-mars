import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DiplomaticImmunity extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DIPLOMATIC_IMMUNITY, tags: [Tag.MICROBE], cost: 5,
      behavior: {city: {}, production: {megacredits: 3}},
      metadata: {cardNumber: 'MY206', renderData: CardRenderer.builder((b) => {b.text('Place city, gain production.');}),
        description: 'Place city, gain production. (The truth is out there.)'},
    });
  }
}
