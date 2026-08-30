import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class FissionPlant extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.FISSION_PLANT, tags: [Tag.PLANT, Tag.CITY], cost: 25,
      behavior: {production: {plants: 1}, drawCard: 2},
      metadata: {cardNumber: 'MY292', renderData: CardRenderer.builder((b) => {b.text('Production and draw.');}),
        description: 'Production and draw. (The stars align.)'},
    });
  }
}
