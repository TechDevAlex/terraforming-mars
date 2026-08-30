import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PortalNetwork extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.PORTAL_NETWORK, tags: [Tag.SPACE, Tag.MARS], cost: 20,
      behavior: {tr: 2},
      metadata: {cardNumber: 'MY369', renderData: CardRenderer.builder((b) => {b.tr(2);}),
        description: 'Raise your TR 2 steps. (The stars align.)'},
    });
  }
}
