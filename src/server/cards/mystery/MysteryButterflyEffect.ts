import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryButterflyEffect extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_BUTTERFLY_EFFECT, tags: [Tag.BUILDING, Tag.SCIENCE], cost: 24,
      behavior: {tr: 1, production: {titanium: 2}},
      metadata: {cardNumber: 'MY319', renderData: CardRenderer.builder((b) => {b.tr(1);}),
        description: 'Raise your TR 1 step. (The mystery deepens.)'},
    });
  }
}
