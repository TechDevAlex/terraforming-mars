import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SeverusSnapesGambit extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.SEVERUS_SNAPES_GAMBIT, tags: [Tag.SCIENCE], cost: 18, victoryPoints: -1,
      behavior: {production: {megacredits: 5, energy: 1}},
      metadata: {cardNumber: 'HP27', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(5).energy(1));}),
        description: 'Increase M€ production 5 steps and energy production 1 step. -1 VP. (Always—but the cost of Snape\'s double life was paid in ways no one could see.)'},
    });
  }
}
