import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard432 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_432, tags: [Tag.EARTH], cost: 12,
      victoryPoints: -2,
      behavior: {production: {energy: 1}},
      metadata: {cardNumber: 'MY432', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(1);});}),
        description: '-2 VP. (The frontier expands.)'},
    });
  }
}
