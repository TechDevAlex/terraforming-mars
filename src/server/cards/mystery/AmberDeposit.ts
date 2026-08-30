import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AmberDeposit extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.AMBER_DEPOSIT, tags: [Tag.CITY, Tag.JOVIAN], cost: 13,
      behavior: {production: {heat: 2, energy: 1}},
      metadata: {cardNumber: 'MY136', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2); pb.energy(1);});}),
        description: 'Adjust production. (Darkness falls.)'},
    });
  }
}
