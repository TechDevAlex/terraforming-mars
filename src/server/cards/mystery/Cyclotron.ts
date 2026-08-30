import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class Cyclotron extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CYCLOTRON, tags: [Tag.POWER], cost: 28,
      behavior: {production: {heat: 2, steel: 1, energy: 2}},
      metadata: {cardNumber: 'MY287', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2); pb.steel(1); pb.energy(2);});}),
        description: 'Adjust production. (The unknown beckons.)'},
    });
  }
}
