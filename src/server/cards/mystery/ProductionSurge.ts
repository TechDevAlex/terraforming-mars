import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ProductionSurge extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PRODUCTION_SURGE, tags: [Tag.EARTH, Tag.SPACE], cost: 22,
      behavior: {greenery: {}},
      metadata: {cardNumber: 'MY162', renderData: CardRenderer.builder((b) => {b.text('Place greenery.');}),
        description: 'Place greenery. (Space warps.)'},
    });
  }
}
