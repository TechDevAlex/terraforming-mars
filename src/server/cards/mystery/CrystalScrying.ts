import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CrystalScrying extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CRYSTAL_SCRYING, tags: [Tag.MICROBE, Tag.EARTH], cost: 7,
      behavior: {city: {}, production: {megacredits: 2}},
      metadata: {cardNumber: 'MY072', renderData: CardRenderer.builder((b) => {b.text('Place city, gain production.');}),
        description: 'Place city, gain production. (Nature finds a way.)'},
    });
  }
}
