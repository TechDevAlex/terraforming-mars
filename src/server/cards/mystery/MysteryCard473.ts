import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard473 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_473, tags: [Tag.POWER], cost: 17,
      victoryPoints: 1,
      behavior: {production: {steel: 2, energy: 1}},
      metadata: {cardNumber: 'MY473', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(2); pb.energy(1);});}),
        description: '1 VP. (Shadows hide secrets.)'},
    });
  }
}
