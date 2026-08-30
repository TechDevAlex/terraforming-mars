import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DeepLearning extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DEEP_LEARNING, tags: [Tag.SPACE], cost: 26,
      behavior: {production: {titanium: 1, megacredits: 1}},
      metadata: {cardNumber: 'MY327', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Trust no one.)'},
    });
  }
}
