import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryButterflyEffect extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_BUTTERFLY_EFFECT, tags: [Tag.BUILDING, Tag.SCIENCE], cost: 14,
      behavior: {tr: 1, production: {titanium: 2}},
      metadata: {cardNumber: 'MY319', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'TR and production. (The mystery deepens.)'},
    });
  }
}
