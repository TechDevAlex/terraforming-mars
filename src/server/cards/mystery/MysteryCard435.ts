import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard435 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_435, tags: [Tag.SPACE], cost: 20,
      victoryPoints: -1,
      behavior: {tr: 2},
      metadata: {cardNumber: 'MY435', renderData: CardRenderer.builder((b) => {b.text('Raise TR.');}),
        description: 'Raise TR. (Trust no one.)'},
    });
  }
}
