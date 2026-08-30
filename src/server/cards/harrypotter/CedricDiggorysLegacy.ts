import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CedricDiggorysLegacy extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CEDRIC_DIGGORYS_LEGACY, tags: [Tag.EARTH], cost: 10, victoryPoints: 2,
      behavior: {tr: 1, production: {megacredits: 1}},
      metadata: {cardNumber: 'HP24', renderData: CardRenderer.builder((b) => {b.tr(1).production((pb) => pb.megacredits(1));}),
        description: 'Raise your TR 1 step. Increase your M€ production 1 step. (Remember Cedric—remember what happens when goodness meets darkness.)'},
    });
  }
}
