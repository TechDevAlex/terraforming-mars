import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PrimalFear extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PRIMAL_FEAR, tags: [Tag.MICROBE, Tag.SPACE], cost: 6,
      behavior: {tr: 1, production: {titanium: 2}},
      metadata: {cardNumber: 'MY342', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'Raise your TR 1 step. (Knowledge is the ultimate currency.)'},
    });
  }
}
