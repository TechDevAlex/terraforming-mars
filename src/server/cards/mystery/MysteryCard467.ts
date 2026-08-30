import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard467 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_467, tags: [Tag.JOVIAN, Tag.MARS], cost: 9,
      victoryPoints: -1,
      behavior: {tr: 1, production: {titanium: 2}},
      metadata: {cardNumber: 'MY467', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'TR and production. (Progress demands sacrifice.)'},
    });
  }
}
