import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AnonymousDonor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.ANONYMOUS_DONOR, tags: [Tag.EARTH, Tag.MARS], cost: 18,
      behavior: {drawCard: 3},
      metadata: {cardNumber: 'MY247', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw cards. (Innovation breeds opportunity.)'},
    });
  }
}
