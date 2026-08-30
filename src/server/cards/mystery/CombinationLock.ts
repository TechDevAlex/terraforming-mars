import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CombinationLock extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.COMBINATION_LOCK, tags: [Tag.BUILDING, Tag.CITY], cost: 26,
      victoryPoints: -1,
      behavior: {tr: 1, production: {titanium: 2}},
      metadata: {cardNumber: 'MY263', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'Raise your TR 1 step. -1 VP. (Every clue matters.)'},
    });
  }
}
