import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard459 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_459, tags: [Tag.JOVIAN, Tag.MARS], cost: 14,
      victoryPoints: 2,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY459', renderData: CardRenderer.builder((b) => {b.oceans(1);}),
        description: '2 VP. (The frontier expands.)'},
    });
  }
}
