import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PressConference extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PRESS_CONFERENCE, tags: [Tag.ANIMAL], cost: 6,
      behavior: {production: {energy: 4, steel: 2}},
      metadata: {cardNumber: 'MY188', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Time bends.)'},
    });
  }
}
