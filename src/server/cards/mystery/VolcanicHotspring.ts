import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class VolcanicHotspring extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.VOLCANIC_HOTSPRING, tags: [Tag.PLANT], cost: 16,
      victoryPoints: -1,
      behavior: {production: {megacredits: 3, plants: 1}},
      metadata: {cardNumber: 'MY132', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(3); pb.plants(1);});}),
        description: '-1 VP. (The unknown beckons.)'},
    });
  }
}
