import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class RefugeeCamp extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.REFUGEE_CAMP, tags: [Tag.PLANT, Tag.SCIENCE], cost: 19,
      behavior: {production: {heat: 2}, drawCard: 2},
      metadata: {cardNumber: 'MY199', renderData: CardRenderer.builder((b) => {b.text('Production and draw.');}),
        description: 'Production and draw. (Reality shifts.)'},
    });
  }
}
