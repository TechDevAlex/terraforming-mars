import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ShadowCabinet extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SHADOW_CABINET, tags: [Tag.SPACE], cost: 17,
      behavior: {drawCard: 2},
      metadata: {cardNumber: 'MY194', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw 2 cards. (Trust no one.)'},
    });
  }
}
