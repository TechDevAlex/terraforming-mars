import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BansheeFrequency extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BANSHEE_FREQUENCY, tags: [Tag.EARTH], cost: 26,
      behavior: {production: {plants: 3}},
      metadata: {cardNumber: 'MY084', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(3);});}),
        description: 'Adjust production. (A whisper in the void.)'},
    });
  }
}
