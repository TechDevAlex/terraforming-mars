import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard495 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_495, tags: [Tag.BUILDING], cost: 9,
      victoryPoints: 1,
      behavior: {tr: 1, production: {titanium: 1}},
      metadata: {cardNumber: 'MY495', renderData: CardRenderer.builder((b) => {b.tr(1);}),
        description: 'Raise your TR 1 step. 1 VP. (The plot thickens.)'},
    });
  }
}
