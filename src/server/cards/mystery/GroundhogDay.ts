import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GroundhogDay extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.GROUNDHOG_DAY, tags: [], cost: 17,
      victoryPoints: 3,
      behavior: {production: {plants: 2, heat: 1}},
      metadata: {cardNumber: 'MY357', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Progress demands sacrifice.)'},
    });
  }
}
