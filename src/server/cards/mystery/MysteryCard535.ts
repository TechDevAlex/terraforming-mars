import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard535 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_535, tags: [Tag.PLANT, Tag.BUILDING], cost: 21,
      victoryPoints: 1,
      behavior: {tr: 1},
      metadata: {cardNumber: 'MY535', renderData: CardRenderer.builder((b) => {b.text('Raise TR.');}),
        description: 'Raise TR. (Innovation breeds opportunity.)'},
    });
  }
}
