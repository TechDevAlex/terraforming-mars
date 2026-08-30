import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SkeletonKey extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.SKELETON_KEY, tags: [Tag.MARS], cost: 20,
      victoryPoints: 3,
      behavior: {tr: 1, production: {megacredits: 2}},
      metadata: {cardNumber: 'MY261', renderData: CardRenderer.builder((b) => {b.tr(1);}),
        description: 'Raise your TR 1 step. 3 VP. (Steel and will forge the path.)'},
    });
  }
}
