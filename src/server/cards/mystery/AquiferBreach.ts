import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AquiferBreach extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.AQUIFER_BREACH, tags: [], cost: 6,
      behavior: {tr: 1, production: {steel: 2}},
      metadata: {cardNumber: 'MY142', renderData: CardRenderer.builder((b) => {b.tr(1);}),
        description: 'Raise your TR 1 step. (Trust no one.)'},
    });
  }
}
