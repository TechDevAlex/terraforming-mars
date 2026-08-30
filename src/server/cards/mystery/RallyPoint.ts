import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class RallyPoint extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.RALLY_POINT, tags: [Tag.EARTH, Tag.SCIENCE], cost: 11,
      behavior: {greenery: {}},
      metadata: {cardNumber: 'MY230', renderData: CardRenderer.builder((b) => {b.greenery();}),
        description: 'Place greenery. (Darkness falls.)'},
    });
  }
}
