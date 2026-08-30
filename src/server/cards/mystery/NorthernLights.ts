import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class NorthernLights extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.NORTHERN_LIGHTS, tags: [], cost: 17,
      behavior: {production: {energy: 4, megacredits: 1}},
      metadata: {cardNumber: 'MY269', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(4); pb.megacredits(1);});}),
        description: 'Adjust production. (Innovation breeds opportunity.)'},
    });
  }
}
