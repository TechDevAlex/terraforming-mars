import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FoundryComplex extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.FOUNDRY_COMPLEX, tags: [Tag.MICROBE, Tag.SCIENCE], cost: 26,
      victoryPoints: 2,
      behavior: {production: {energy: 2, megacredits: 2}},
      metadata: {cardNumber: 'MY160', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: '2 VP. (The truth is out there.)'},
    });
  }
}
