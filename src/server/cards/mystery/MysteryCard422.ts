import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard422 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_422, tags: [Tag.POWER, Tag.SCIENCE], cost: 7,
      victoryPoints: -2,
      behavior: {production: {steel: 2}},
      metadata: {cardNumber: 'MY422', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Innovation breeds opportunity.)'},
    });
  }
}
