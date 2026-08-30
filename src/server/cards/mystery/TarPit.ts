import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TarPit extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.TAR_PIT, tags: [Tag.MARS], cost: 34,
      victoryPoints: 2,
      behavior: {production: {plants: 2, steel: 2}},
      metadata: {cardNumber: 'MY139', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(2); pb.steel(2);});}),
        description: '2 VP. (The stars align.)'},
    });
  }
}
