import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class LockedBox extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.LOCKED_BOX, tags: [Tag.MARS], cost: 27,
      behavior: {production: {energy: 1, titanium: 2}},
      metadata: {cardNumber: 'MY260', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (The unknown beckons.)'},
    });
  }
}
