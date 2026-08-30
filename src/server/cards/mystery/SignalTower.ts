import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SignalTower extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SIGNAL_TOWER, tags: [Tag.CITY, Tag.MARS], cost: 13,
      behavior: {drawCard: 3},
      metadata: {cardNumber: 'MY180', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw 3 cards. (Nothing is as it seems.)'},
    });
  }
}
