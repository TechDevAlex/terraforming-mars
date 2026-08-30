import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class NebulaForge extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.NEBULA_FORGE, tags: [Tag.PLANT], cost: 10,
      victoryPoints: 1,
      behavior: {production: {heat: 1, energy: 1}},
      metadata: {cardNumber: 'MY033', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(1); pb.energy(1);});}),
        description: '1 VP. (Secrets have power.)'},
    });
  }
}
