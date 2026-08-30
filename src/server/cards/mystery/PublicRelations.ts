import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PublicRelations extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.PUBLIC_RELATIONS, tags: [Tag.ANIMAL], cost: 13,
      victoryPoints: 3,
      behavior: {tr: 1},
      metadata: {cardNumber: 'MY182', renderData: CardRenderer.builder((b) => {b.tr(1);}),
        description: 'Raise your TR 1 step. 3 VP. (The stars align.)'},
    });
  }
}
