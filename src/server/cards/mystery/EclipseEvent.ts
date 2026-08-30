import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class EclipseEvent extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.ECLIPSE_EVENT, tags: [Tag.EARTH], cost: 16,
      victoryPoints: -2,
      behavior: {greenery: {}},
      metadata: {cardNumber: 'MY270', renderData: CardRenderer.builder((b) => {b.text('Place greenery.');}),
        description: '-2 VP. (A whisper in the void.)'},
    });
  }
}
