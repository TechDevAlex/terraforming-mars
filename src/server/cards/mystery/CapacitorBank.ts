import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CapacitorBank extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CAPACITOR_BANK, tags: [Tag.POWER, Tag.CITY], cost: 7,
      behavior: {production: {energy: 1, titanium: 1, plants: 2}},
      metadata: {cardNumber: 'MY175', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(1); pb.titanium(1); pb.plants(2);});}),
        description: 'Adjust production. (Innovation breeds opportunity.)'},
    });
  }
}
