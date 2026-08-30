import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ParticleAccelerator extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PARTICLE_ACCELERATOR, tags: [Tag.ANIMAL], cost: 11,
      behavior: {production: {plants: 1}, drawCard: 1},
      metadata: {cardNumber: 'MY286', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(1);}); b.br; b.cards(1);}),
        description: 'Production and draw. (Trust no one.)'},
    });
  }
}
