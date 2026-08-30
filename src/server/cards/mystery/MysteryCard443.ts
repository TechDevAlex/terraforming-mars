import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard443 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_443, tags: [Tag.BUILDING], cost: 7,
      behavior: {tr: 1, production: {titanium: 1}},
      metadata: {cardNumber: 'MY443', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'TR and production. (Every clue matters.)'},
    });
  }
}
