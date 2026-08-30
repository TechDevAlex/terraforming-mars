import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GhostShip extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.GHOST_SHIP, tags: [Tag.MARS, Tag.POWER], cost: 13,
      behavior: {production: {titanium: 2}},
      metadata: {cardNumber: 'MY080', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (The truth is out there.)'},
    });
  }
}
