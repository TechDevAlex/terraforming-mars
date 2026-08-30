import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class InvisibleInk extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.INVISIBLE_INK, tags: [], cost: 24,
      behavior: {tr: 1, production: {titanium: 1}},
      metadata: {cardNumber: 'MY256', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'TR and production. (The stars align.)'},
    });
  }
}
