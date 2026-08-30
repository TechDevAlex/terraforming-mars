import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CodedMessage extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CODED_MESSAGE, tags: [Tag.JOVIAN, Tag.ANIMAL], cost: 5,
      victoryPoints: -1,
      behavior: {production: {energy: 3, heat: 2}},
      metadata: {cardNumber: 'MY257', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (The truth is out there.)'},
    });
  }
}
