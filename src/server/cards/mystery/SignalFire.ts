import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SignalFire extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.SIGNAL_FIRE, tags: [Tag.BUILDING, Tag.ANIMAL], cost: 28,
      behavior: {production: {energy: 2, titanium: 1, plants: 1}},
      metadata: {cardNumber: 'MY219', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(2); pb.titanium(1); pb.plants(1);});}),
        description: 'Adjust production. (A whisper in the void.)'},
    });
  }
}
