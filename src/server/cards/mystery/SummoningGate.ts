import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SummoningGate extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SUMMONING_GATE, tags: [Tag.EARTH], cost: 8,
      behavior: {tr: 2},
      metadata: {cardNumber: 'MY076', renderData: CardRenderer.builder((b) => {b.text('Raise TR.');}),
        description: 'Raise your TR 2 steps. (Reality shifts.)'},
    });
  }
}
