import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DeuteriumExtraction extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DEUTERIUM_EXTRACTION, tags: [], cost: 6,
      behavior: {tr: 1, production: {titanium: 2}},
      metadata: {cardNumber: 'MY295', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'TR and production. (The frontier expands.)'},
    });
  }
}
