import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard412 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_412, tags: [Tag.PLANT], cost: 30,
      behavior: {production: {energy: 1, titanium: 1, steel: 2}},
      metadata: {cardNumber: 'MY412', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(1); pb.titanium(1); pb.steel(2);});}),
        description: 'Adjust production. (The veil lifts.)'},
    });
  }
}
