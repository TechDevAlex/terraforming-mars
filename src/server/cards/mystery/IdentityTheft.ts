import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class IdentityTheft extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.IDENTITY_THEFT, tags: [Tag.SCIENCE], cost: 12,
      behavior: {production: {heat: 1, plants: 1}},
      metadata: {cardNumber: 'MY108', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Reality shifts.)'},
    });
  }
}
