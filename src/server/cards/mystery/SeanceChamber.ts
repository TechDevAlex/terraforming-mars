import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SeanceChamber extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SEANCE_CHAMBER, tags: [Tag.EARTH], cost: 6,
      behavior: {global: {oxygen: 1}},
      metadata: {cardNumber: 'MY081', renderData: CardRenderer.builder((b) => {b.text('Raise global parameter.');}),
        description: 'Raise global parameter. (Reality shifts.)'},
    });
  }
}
