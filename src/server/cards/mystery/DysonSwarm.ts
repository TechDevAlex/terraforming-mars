import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DysonSwarm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DYSON_SWARM, tags: [Tag.SCIENCE, Tag.CITY], cost: 28,
      behavior: {production: {energy: 1, titanium: 1}},
      metadata: {cardNumber: 'MY308', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(1); pb.titanium(1);});}),
        description: 'Adjust production. (The frontier expands.)'},
    });
  }
}
