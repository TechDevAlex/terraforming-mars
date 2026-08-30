import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard387 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_387, tags: [Tag.MARS, Tag.PLANT], cost: 18,
      victoryPoints: 2,
      behavior: {tr: 1, production: {titanium: 1}},
      metadata: {cardNumber: 'MY387', renderData: CardRenderer.builder((b) => {b.tr(1);}),
        description: 'Raise your TR 1 step. 2 VP. (Knowledge is the ultimate currency.)'},
    });
  }
}
