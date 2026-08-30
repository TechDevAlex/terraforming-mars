import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PlasmaTorch extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PLASMA_TORCH, tags: [Tag.JOVIAN], cost: 14,
      behavior: {tr: 1, production: {titanium: 1}},
      metadata: {cardNumber: 'MY283', renderData: CardRenderer.builder((b) => {b.tr(1);}),
        description: 'Raise your TR 1 step. (Reality shifts.)'},
    });
  }
}
