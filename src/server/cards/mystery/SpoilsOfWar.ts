import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SpoilsOfWar extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SPOILS_OF_WAR, tags: [Tag.JOVIAN, Tag.CITY], cost: 22,
      behavior: {drawCard: 1},
      metadata: {cardNumber: 'MY237', renderData: CardRenderer.builder((b) => {b.cards(1);}),
        description: 'Draw 1 card. (Progress demands sacrifice.)'},
    });
  }
}
