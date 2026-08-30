import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ForbiddenKnowledge extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.FORBIDDEN_KNOWLEDGE, tags: [Tag.SPACE], cost: 13,
      behavior: {global: {oxygen: 1}},
      metadata: {cardNumber: 'MY073', renderData: CardRenderer.builder((b) => {b.oxygen(1);}),
        description: 'Raise oxygen 1 step. (Progress demands sacrifice.)'},
    });
  }
}
