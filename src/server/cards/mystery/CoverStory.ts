import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CoverStory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.COVER_STORY, tags: [], cost: 24,
      behavior: {production: {titanium: 2, energy: 2, megacredits: 1}},
      metadata: {cardNumber: 'MY185', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (The plot thickens.)'},
    });
  }
}
