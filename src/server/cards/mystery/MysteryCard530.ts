import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard530 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_530, tags: [Tag.POWER], cost: 14,
      behavior: {production: {heat: 2, titanium: 3}},
      metadata: {cardNumber: 'MY530', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2); pb.titanium(3);});}),
        description: 'Adjust production. (The frontier expands.)'},
    });
  }
}
