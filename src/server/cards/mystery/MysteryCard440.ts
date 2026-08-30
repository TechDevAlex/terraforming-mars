import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard440 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_440, tags: [Tag.MARS, Tag.EARTH], cost: 8,
      behavior: {production: {plants: 2, titanium: 2}},
      metadata: {cardNumber: 'MY440', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Nature finds a way.)'},
    });
  }
}
