import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MuscleMemory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MUSCLE_MEMORY, tags: [Tag.MICROBE, Tag.POWER], cost: 26,
      behavior: {production: {heat: 1, steel: 3}},
      metadata: {cardNumber: 'MY347', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Nature finds a way.)'},
    });
  }
}
