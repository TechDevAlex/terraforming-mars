import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard486 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_486, tags: [Tag.MICROBE, Tag.CITY], cost: 16,
      victoryPoints: 1,
      behavior: {production: {energy: 1, steel: 1, megacredits: 1}},
      metadata: {cardNumber: 'MY486', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(1); pb.steel(1); pb.megacredits(1);});}),
        description: '1 VP. (The unknown beckons.)'},
    });
  }
}
