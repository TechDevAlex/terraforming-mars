import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard493 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_493, tags: [Tag.CITY, Tag.PLANT], cost: 18,
      behavior: {production: {titanium: 2}},
      metadata: {cardNumber: 'MY493', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(2);});}),
        description: 'Adjust production. (Trust no one.)'},
    });
  }
}
