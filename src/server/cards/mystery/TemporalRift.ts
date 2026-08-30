import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TemporalRift extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.TEMPORAL_RIFT, tags: [Tag.SCIENCE, Tag.JOVIAN], cost: 20,
      behavior: {production: {megacredits: 3}},
      metadata: {cardNumber: 'MY037', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(3);});}),
        description: 'Adjust production. (Innovation breeds opportunity.)'},
    });
  }
}
