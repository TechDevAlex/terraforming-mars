import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FossilBed extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.FOSSIL_BED, tags: [Tag.ANIMAL], cost: 7,
      behavior: {global: {oxygen: 1}},
      metadata: {cardNumber: 'MY137', renderData: CardRenderer.builder((b) => {b.text('Raise global parameter.');}),
        description: 'Raise oxygen 1 step. (Reality shifts.)'},
    });
  }
}
