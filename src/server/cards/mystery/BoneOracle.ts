import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BoneOracle extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BONE_ORACLE, tags: [Tag.CITY, Tag.ANIMAL], cost: 23,
      behavior: {production: {heat: 2}, drawCard: 1},
      metadata: {cardNumber: 'MY067', renderData: CardRenderer.builder((b) => {b.text('Production and draw.');}),
        description: 'Production and draw. (Shadows hide secrets.)'},
    });
  }
}
