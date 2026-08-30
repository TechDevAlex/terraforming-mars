import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FlankingManeuver extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.FLANKING_MANEUVER, tags: [Tag.JOVIAN, Tag.PLANT], cost: 11,
      victoryPoints: 2,
      behavior: {stock: {plants: 2}},
      metadata: {cardNumber: 'MY224', renderData: CardRenderer.builder((b) => {b.plants(2);}),
        description: '2 VP. (Progress demands sacrifice.)'},
    });
  }
}
