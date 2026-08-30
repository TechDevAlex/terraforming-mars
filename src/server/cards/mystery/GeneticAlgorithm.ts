import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GeneticAlgorithm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.GENETIC_ALGORITHM, tags: [Tag.SCIENCE, Tag.JOVIAN], cost: 7,
      behavior: {greenery: {}},
      metadata: {cardNumber: 'MY328', renderData: CardRenderer.builder((b) => {b.text('Place greenery.');}),
        description: 'Place greenery. (Every clue matters.)'},
    });
  }
}
