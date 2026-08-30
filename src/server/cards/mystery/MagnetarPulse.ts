import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MagnetarPulse extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MAGNETAR_PULSE, tags: [Tag.EARTH], cost: 25,
      behavior: {city: {}, production: {megacredits: 3}},
      metadata: {cardNumber: 'MY048', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(3);}); b.br; b.city();}),
        description: 'Place city, gain production. (Darkness falls.)'},
    });
  }
}
