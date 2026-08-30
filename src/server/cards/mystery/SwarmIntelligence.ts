import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SwarmIntelligence extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SWARM_INTELLIGENCE, tags: [Tag.POWER, Tag.JOVIAN], cost: 12,
      victoryPoints: 3,
      behavior: {stock: {steel: 4}},
      metadata: {cardNumber: 'MY329', renderData: CardRenderer.builder((b) => {b.text('Gain resources.');}),
        description: 'Gain resources. (Reality shifts.)'},
    });
  }
}
