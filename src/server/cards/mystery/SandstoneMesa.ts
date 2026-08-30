import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SandstoneMesa extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SANDSTONE_MESA, tags: [Tag.EARTH, Tag.SPACE], cost: 5,
      victoryPoints: -1,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY148', renderData: CardRenderer.builder((b) => {b.oceans(1);}),
        description: '-1 VP. (The plot thickens.)'},
    });
  }
}
