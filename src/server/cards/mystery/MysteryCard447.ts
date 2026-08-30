import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard447 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_447, tags: [Tag.MICROBE], cost: 20,
      behavior: {tr: 2},
      metadata: {cardNumber: 'MY447', renderData: CardRenderer.builder((b) => {b.text('Raise TR.');}),
        description: 'Raise TR. (Time bends.)'},
    });
  }
}
