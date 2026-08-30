import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DreamCatcher extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DREAM_CATCHER, tags: [Tag.CITY, Tag.SCIENCE], cost: 21,
      behavior: {tr: 1, production: {titanium: 2}},
      metadata: {cardNumber: 'MY336', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'Raise your TR 1 step. (Reality shifts.)'},
    });
  }
}
