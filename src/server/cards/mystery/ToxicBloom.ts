import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ToxicBloom extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.TOXIC_BLOOM, tags: [Tag.CITY, Tag.MARS], cost: 23,
      victoryPoints: 2,
      behavior: {production: {megacredits: 1}, drawCard: 1},
      metadata: {cardNumber: 'MY126', renderData: CardRenderer.builder((b) => {b.text('Production and draw.');}),
        description: 'Production and draw. (Knowledge is the ultimate currency.)'},
    });
  }
}
