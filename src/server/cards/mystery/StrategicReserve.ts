import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class StrategicReserve extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.STRATEGIC_RESERVE, tags: [Tag.JOVIAN], cost: 22,
      victoryPoints: -1,
      behavior: {production: {plants: 1, titanium: 2}},
      metadata: {cardNumber: 'MY233', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(1); pb.titanium(2);});}),
        description: '-1 VP. (The veil lifts.)'},
    });
  }
}
