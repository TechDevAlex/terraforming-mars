import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class LastStand extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.LAST_STAND, tags: [Tag.JOVIAN], cost: 15,
      victoryPoints: 1,
      behavior: {production: {titanium: 1, heat: 1, plants: 1}},
      metadata: {cardNumber: 'MY235', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: '1 VP. (The truth is out there.)'},
    });
  }
}
