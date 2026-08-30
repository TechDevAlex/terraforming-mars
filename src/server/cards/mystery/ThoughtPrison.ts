import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ThoughtPrison extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.THOUGHT_PRISON, tags: [Tag.EARTH, Tag.MICROBE], cost: 14,
      victoryPoints: 1,
      behavior: {production: {heat: 2, titanium: 1, megacredits: 1}},
      metadata: {cardNumber: 'MY335', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: '1 VP. (The truth is out there.)'},
    });
  }
}
