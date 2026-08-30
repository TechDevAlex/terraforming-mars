import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SimulationChamber extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.SIMULATION_CHAMBER, tags: [Tag.SCIENCE, Tag.EARTH], cost: 11,
      behavior: {production: {energy: 2, heat: 2}},
      metadata: {cardNumber: 'MY351', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(2); pb.heat(2);});}),
        description: 'Adjust production. (Reality shifts.)'},
    });
  }
}
