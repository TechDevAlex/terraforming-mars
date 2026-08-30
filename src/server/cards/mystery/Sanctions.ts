import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class Sanctions extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SANCTIONS, tags: [Tag.ANIMAL], cost: 6,
      behavior: {drawCard: 2},
      metadata: {cardNumber: 'MY204', renderData: CardRenderer.builder((b) => {b.cards(2);}),
        description: 'Draw 2 cards. (Nothing is as it seems.)'},
    });
  }
}
