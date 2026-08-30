import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard376 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_376, tags: [Tag.SCIENCE], cost: 10,
      victoryPoints: -2,
      behavior: {tr: 1, production: {megacredits: 2}},
      metadata: {cardNumber: 'MY376', renderData: CardRenderer.builder((b) => {b.tr(1);}),
        description: 'Raise your TR 1 step. -2 VP. (Nature finds a way.)'},
    });
  }
}
