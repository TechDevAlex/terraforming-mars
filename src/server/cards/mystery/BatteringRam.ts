import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BatteringRam extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BATTERING_RAM, tags: [Tag.POWER, Tag.MICROBE], cost: 12,
      victoryPoints: -1,
      behavior: {production: {energy: 2, plants: 1}},
      metadata: {cardNumber: 'MY226', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (The unknown beckons.)'},
    });
  }
}
