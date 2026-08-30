import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard450 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_450, tags: [Tag.MICROBE], cost: 16,
      behavior: {production: {megacredits: 1}, drawCard: 1},
      metadata: {cardNumber: 'MY450', renderData: CardRenderer.builder((b) => {b.text('Production and draw.');}),
        description: 'Production and draw. (Darkness falls.)'},
    });
  }
}
