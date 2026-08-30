import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SpiritMedium extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.SPIRIT_MEDIUM, tags: [Tag.SPACE], cost: 20,
      victoryPoints: 1,
      behavior: {production: {steel: 1}},
      metadata: {cardNumber: 'MY064', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(1);});}),
        description: '1 VP. (Nothing is as it seems.)'},
    });
  }
}
