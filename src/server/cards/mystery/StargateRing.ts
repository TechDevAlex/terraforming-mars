import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class StargateRing extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.STARGATE_RING, tags: [Tag.JOVIAN, Tag.MICROBE], cost: 7,
      victoryPoints: 1,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY368', renderData: CardRenderer.builder((b) => {b.text('Place an ocean.');}),
        description: '1 VP. (Progress demands sacrifice.)'},
    });
  }
}
