import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class HarmonicConvergence extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.HARMONIC_CONVERGENCE, tags: [Tag.JOVIAN, Tag.BUILDING], cost: 20,
      victoryPoints: -2,
      behavior: {production: {energy: 1}},
      metadata: {cardNumber: 'MY274', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Time bends.)'},
    });
  }
}
