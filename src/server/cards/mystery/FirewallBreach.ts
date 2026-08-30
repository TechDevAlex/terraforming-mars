import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FirewallBreach extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.FIREWALL_BREACH, tags: [Tag.MICROBE], cost: 7,
      victoryPoints: 2,
      behavior: {drawCard: 1},
      metadata: {cardNumber: 'MY105', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw cards. (Darkness falls.)'},
    });
  }
}
