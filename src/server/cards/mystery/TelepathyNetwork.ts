import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TelepathyNetwork extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.TELEPATHY_NETWORK, tags: [Tag.EARTH], cost: 9,
      behavior: {production: {steel: 2}, drawCard: 2},
      metadata: {cardNumber: 'MY332', renderData: CardRenderer.builder((b) => {b.text('Production and draw.');}),
        description: 'Production and draw. (The unknown beckons.)'},
    });
  }
}
