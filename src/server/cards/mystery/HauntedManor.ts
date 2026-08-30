import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class HauntedManor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.HAUNTED_MANOR, tags: [], cost: 9,
      behavior: {production: {energy: 1}, drawCard: 2},
      metadata: {cardNumber: 'MY078', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(1);}); b.br; b.cards(2);}),
        description: 'Production and draw. (The frontier expands.)'},
    });
  }
}
