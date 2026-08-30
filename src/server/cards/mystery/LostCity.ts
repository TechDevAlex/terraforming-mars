import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class LostCity extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.LOST_CITY, tags: [Tag.JOVIAN, Tag.SCIENCE], cost: 16,
      behavior: {global: {oxygen: 1}},
      metadata: {cardNumber: 'MY212', renderData: CardRenderer.builder((b) => {b.text('Raise global parameter.');}),
        description: 'Raise oxygen 1 step. (Shadows hide secrets.)'},
    });
  }
}
