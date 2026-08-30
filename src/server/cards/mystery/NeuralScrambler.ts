import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class NeuralScrambler extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.NEURAL_SCRAMBLER, tags: [Tag.EARTH], cost: 24,
      behavior: {city: {}, production: {megacredits: 3}},
      metadata: {cardNumber: 'MY106', renderData: CardRenderer.builder((b) => {b.text('Place city, gain production.');}),
        description: 'Place city, gain production. (Trust no one.)'},
    });
  }
}
