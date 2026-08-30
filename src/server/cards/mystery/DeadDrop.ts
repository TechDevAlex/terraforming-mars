import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DeadDrop extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DEAD_DROP, tags: [Tag.JOVIAN], cost: 12,
      behavior: {production: {megacredits: 1, steel: 1}},
      metadata: {cardNumber: 'MY004', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(1); pb.steel(1);});}),
        description: 'Adjust production. (Innovation breeds opportunity.)'},
    });
  }
}
