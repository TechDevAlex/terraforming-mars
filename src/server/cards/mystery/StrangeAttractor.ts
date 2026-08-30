import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class StrangeAttractor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.STRANGE_ATTRACTOR, tags: [Tag.POWER, Tag.EARTH], cost: 25,
      behavior: {city: {}, production: {megacredits: 3}},
      metadata: {cardNumber: 'MY320', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(3);}); b.br; b.city();}),
        description: 'Place city, gain production. (The unknown beckons.)'},
    });
  }
}
