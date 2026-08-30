import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard471 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_471, tags: [Tag.MICROBE, Tag.SPACE], cost: 10,
      victoryPoints: -2,
      behavior: {tr: 2},
      metadata: {cardNumber: 'MY471', renderData: CardRenderer.builder((b) => {b.text('Raise TR.');}),
        description: 'Raise TR. (Innovation breeds opportunity.)'},
    });
  }
}
