import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TarPit extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.TAR_PIT, tags: [Tag.MARS], cost: 14,
      victoryPoints: 2,
      behavior: {production: {plants: 2, steel: 2}},
      metadata: {cardNumber: 'MY139', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (The stars align.)'},
    });
  }
}
