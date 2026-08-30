import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DustCollector extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DUST_COLLECTOR, tags: [], cost: 15,
      behavior: {production: {megacredits: 1, plants: 1, energy: 1}},
      metadata: {cardNumber: 'MY299', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(1); pb.plants(1); pb.energy(1);});}),
        description: 'Adjust production. (The stars align.)'},
    });
  }
}
