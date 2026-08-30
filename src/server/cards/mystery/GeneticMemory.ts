import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GeneticMemory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.GENETIC_MEMORY, tags: [Tag.BUILDING], cost: 7,
      victoryPoints: -1,
      behavior: {production: {titanium: 1, steel: 1}},
      metadata: {cardNumber: 'MY344', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(1); pb.steel(1);});}),
        description: '-1 VP. (Shadows hide secrets.)'},
    });
  }
}
