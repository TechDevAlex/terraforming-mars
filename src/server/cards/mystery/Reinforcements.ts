import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class Reinforcements extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.REINFORCEMENTS, tags: [], cost: 14,
      behavior: {production: {steel: 2}, drawCard: 2},
      metadata: {cardNumber: 'MY234', renderData: CardRenderer.builder((b) => {b.text('Production and draw.');}),
        description: 'Production and draw. (The truth is out there.)'},
    });
  }
}
