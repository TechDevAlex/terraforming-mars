import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class UndergroundRiver extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.UNDERGROUND_RIVER, tags: [Tag.CITY], cost: 25,
      behavior: {production: {titanium: 1, megacredits: 2, energy: 1}},
      metadata: {cardNumber: 'MY141', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(1); pb.megacredits(2); pb.energy(1);});}),
        description: 'Adjust production. (Every clue matters.)'},
    });
  }
}
