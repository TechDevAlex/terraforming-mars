import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SmeltingWorks extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.SMELTING_WORKS, tags: [Tag.MICROBE], cost: 11,
      behavior: {production: {plants: 1, titanium: 2}},
      metadata: {cardNumber: 'MY159', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Knowledge is the ultimate currency.)'},
    });
  }
}
