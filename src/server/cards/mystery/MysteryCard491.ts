import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard491 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_491, tags: [], cost: 11,
      victoryPoints: -1,
      behavior: {tr: 1, production: {steel: 1}},
      metadata: {cardNumber: 'MY491', renderData: CardRenderer.builder((b) => {b.tr(1);}),
        description: 'Raise your TR 1 step. -1 VP. (Shadows hide secrets.)'},
    });
  }
}
