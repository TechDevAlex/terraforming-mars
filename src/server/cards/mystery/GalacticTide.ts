import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GalacticTide extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.GALACTIC_TIDE, tags: [Tag.ANIMAL], cost: 4,
      victoryPoints: 2,
      behavior: {production: {megacredits: 1, plants: 2}},
      metadata: {cardNumber: 'MY056', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: '2 VP. (The frontier expands.)'},
    });
  }
}
