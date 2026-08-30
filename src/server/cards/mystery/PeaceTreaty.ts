import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PeaceTreaty extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PEACE_TREATY, tags: [Tag.JOVIAN], cost: 21,
      behavior: {production: {heat: 1, energy: 2, megacredits: 1}},
      metadata: {cardNumber: 'MY202', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(1); pb.energy(2); pb.megacredits(1);});}),
        description: 'Adjust production. (The plot thickens.)'},
    });
  }
}
