import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ParasiticVine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PARASITIC_VINE, tags: [Tag.MICROBE, Tag.BUILDING], cost: 27,
      victoryPoints: 3,
      behavior: {production: {energy: 1, megacredits: 2}},
      metadata: {cardNumber: 'MY127', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: '3 VP. (The stars align.)'},
    });
  }
}
