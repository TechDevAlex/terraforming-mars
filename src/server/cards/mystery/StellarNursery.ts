import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class StellarNursery extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.STELLAR_NURSERY, tags: [Tag.EARTH, Tag.JOVIAN], cost: 4,
      behavior: {city: {}, production: {megacredits: 2}},
      metadata: {cardNumber: 'MY057', renderData: CardRenderer.builder((b) => {b.text('Place city, gain production.');}),
        description: 'Place city, gain production. (Nothing is as it seems.)'},
    });
  }
}
