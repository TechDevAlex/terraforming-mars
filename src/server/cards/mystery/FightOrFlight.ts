import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FightOrFlight extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.FIGHT_OR_FLIGHT, tags: [Tag.POWER, Tag.SPACE], cost: 16,
      behavior: {production: {heat: 3, megacredits: 2}},
      metadata: {cardNumber: 'MY340', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(3); pb.megacredits(2);});}),
        description: 'Adjust production. (Progress demands sacrifice.)'},
    });
  }
}
