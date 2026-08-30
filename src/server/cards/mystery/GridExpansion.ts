import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GridExpansion extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.GRID_EXPANSION, tags: [Tag.POWER, Tag.PLANT], cost: 5,
      behavior: {production: {megacredits: 1, energy: 1, titanium: 2}},
      metadata: {cardNumber: 'MY172', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (A whisper in the void.)'},
    });
  }
}
