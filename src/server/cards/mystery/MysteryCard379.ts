import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard379 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_379, tags: [Tag.BUILDING], cost: 9,
      behavior: {global: {oxygen: 1}},
      metadata: {cardNumber: 'MY379', renderData: CardRenderer.builder((b) => {b.oxygen(1);}),
        description: 'Raise oxygen 1 step. (Nothing is as it seems.)'},
    });
  }
}
