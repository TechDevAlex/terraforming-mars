import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class LuckAmplifier extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.LUCK_AMPLIFIER, tags: [], cost: 13,
      behavior: {tr: 1, production: {megacredits: 1}},
      metadata: {cardNumber: 'MY317', renderData: CardRenderer.builder((b) => {b.tr(1);}),
        description: 'Raise your TR 1 step. (Knowledge is the ultimate currency.)'},
    });
  }
}
