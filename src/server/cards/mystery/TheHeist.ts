import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TheHeist extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.THE_HEIST, tags: [Tag.POWER], cost: 5,
      victoryPoints: -2,
      behavior: {greenery: {}},
      metadata: {cardNumber: 'MY022', renderData: CardRenderer.builder((b) => {b.text('Place greenery.');}),
        description: 'Place greenery. (Every clue matters.)'},
    });
  }
}
