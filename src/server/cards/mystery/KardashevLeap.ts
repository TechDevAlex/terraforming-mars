import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class KardashevLeap extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.KARDASHEV_LEAP, tags: [Tag.SCIENCE, Tag.MARS], cost: 10,
      victoryPoints: 2,
      behavior: {production: {steel: 2, megacredits: 2}},
      metadata: {cardNumber: 'MY310', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Nature finds a way.)'},
    });
  }
}
