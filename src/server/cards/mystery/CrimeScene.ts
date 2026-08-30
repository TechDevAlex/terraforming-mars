import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CrimeScene extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CRIME_SCENE, tags: [Tag.BUILDING], cost: 10,
      victoryPoints: 1,
      behavior: {city: {}, production: {megacredits: 3}},
      metadata: {cardNumber: 'MY017', renderData: CardRenderer.builder((b) => {b.text('Place city, gain production.');}),
        description: '1 VP. (The stars align.)'},
    });
  }
}
