import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class HauntedManor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.HAUNTED_MANOR, tags: [], cost: 4,
      behavior: {production: {energy: 1}, drawCard: 2},
      metadata: {cardNumber: 'MY078', renderData: CardRenderer.builder((b) => {b.text('Production and draw.');}),
        description: 'Production and draw. (The frontier expands.)'},
    });
  }
}
