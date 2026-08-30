import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SignalFire extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.SIGNAL_FIRE, tags: [Tag.BUILDING, Tag.ANIMAL], cost: 18,
      behavior: {production: {energy: 2, titanium: 1, plants: 1}},
      metadata: {cardNumber: 'MY219', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (A whisper in the void.)'},
    });
  }
}
