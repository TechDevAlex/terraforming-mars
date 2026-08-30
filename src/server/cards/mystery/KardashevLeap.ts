import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class KardashevLeap extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.KARDASHEV_LEAP, tags: [Tag.SCIENCE, Tag.MARS], cost: 29,
      victoryPoints: 2,
      behavior: {production: {steel: 2, megacredits: 2}},
      metadata: {cardNumber: 'MY310', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(2); pb.megacredits(2);});}),
        description: '2 VP. (Nature finds a way.)'},
    });
  }
}
