import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MatrioshkaBrain extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MATRIOSHKA_BRAIN, tags: [Tag.SPACE, Tag.PLANT], cost: 9,
      victoryPoints: -1,
      behavior: {production: {energy: 2}, drawCard: 1},
      metadata: {cardNumber: 'MY309', renderData: CardRenderer.builder((b) => {b.text('Production and draw.');}),
        description: 'Production and draw. (Progress demands sacrifice.)'},
    });
  }
}
