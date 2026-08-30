import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PetrifiedForest extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.PETRIFIED_FOREST, tags: [Tag.CITY, Tag.EARTH], cost: 8,
      victoryPoints: -1,
      behavior: {stock: {megacredits: 5}},
      metadata: {cardNumber: 'MY138', renderData: CardRenderer.builder((b) => {b.text('Gain resources.');}),
        description: '-1 VP. (Shadows hide secrets.)'},
    });
  }
}
