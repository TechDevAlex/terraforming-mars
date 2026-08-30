import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard496 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_496, tags: [Tag.CITY], cost: 45,
      behavior: {production: {titanium: 3, steel: 2}},
      metadata: {cardNumber: 'MY496', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(3); pb.steel(2);});}),
        description: 'Adjust production. (The unknown beckons.)'},
    });
  }
}
