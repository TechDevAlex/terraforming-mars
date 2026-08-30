import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FalloutShelter extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.FALLOUT_SHELTER, tags: [], cost: 9,
      victoryPoints: 1,
      behavior: {production: {energy: 2}},
      metadata: {cardNumber: 'MY117', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: '1 VP. (Time bends.)'},
    });
  }
}
