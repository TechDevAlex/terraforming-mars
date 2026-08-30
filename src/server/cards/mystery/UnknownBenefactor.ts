import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class UnknownBenefactor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.UNKNOWN_BENEFACTOR, tags: [Tag.SCIENCE, Tag.CITY], cost: 14,
      victoryPoints: -1,
      behavior: {city: {}, production: {megacredits: 1}},
      metadata: {cardNumber: 'MY250', renderData: CardRenderer.builder((b) => {b.text('Place city, gain production.');}),
        description: 'Place city, gain production. (Trust no one.)'},
    });
  }
}
