import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MutantAlgae extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MUTANT_ALGAE, tags: [Tag.POWER], cost: 27,
      behavior: {production: {titanium: 2}},
      metadata: {cardNumber: 'MY128', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (The veil lifts.)'},
    });
  }
}
