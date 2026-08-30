import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard423 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_423, tags: [Tag.SPACE, Tag.MICROBE], cost: 15,
      behavior: {production: {plants: 2, energy: 1, megacredits: 1}},
      metadata: {cardNumber: 'MY423', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Nothing is as it seems.)'},
    });
  }
}
