import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class HallThruster extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.HALL_THRUSTER, tags: [Tag.ANIMAL], cost: 9,
      behavior: {global: {oxygen: 1}},
      metadata: {cardNumber: 'MY303', renderData: CardRenderer.builder((b) => {b.text('Raise global parameter.');}),
        description: 'Raise global parameter. (Time bends.)'},
    });
  }
}
