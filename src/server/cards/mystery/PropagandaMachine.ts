import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PropagandaMachine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PROPAGANDA_MACHINE, tags: [Tag.ANIMAL], cost: 9,
      behavior: {production: {steel: 1}, drawCard: 2},
      metadata: {cardNumber: 'MY181', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(1);}); b.br; b.cards(2);}),
        description: 'Production and draw. (The mystery deepens.)'},
    });
  }
}
