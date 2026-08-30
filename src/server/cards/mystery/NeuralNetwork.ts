import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class NeuralNetwork extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.NEURAL_NETWORK, tags: [Tag.BUILDING], cost: 8,
      behavior: {global: {oxygen: 1}},
      metadata: {cardNumber: 'MY326', renderData: CardRenderer.builder((b) => {b.text('Raise global parameter.');}),
        description: 'Raise oxygen 1 step. (The truth is out there.)'},
    });
  }
}
