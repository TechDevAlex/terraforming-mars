import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BatteringRam extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BATTERING_RAM, tags: [Tag.POWER, Tag.MICROBE], cost: 16,
      victoryPoints: -1,
      behavior: {production: {energy: 2, plants: 1}},
      metadata: {cardNumber: 'MY226', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(2); pb.plants(1);});}),
        description: '-1 VP. (The unknown beckons.)'},
    });
  }
}
