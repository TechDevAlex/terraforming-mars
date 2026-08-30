import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard494 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_494, tags: [Tag.SPACE], cost: 8,
      behavior: {tr: 2},
      metadata: {cardNumber: 'MY494', renderData: CardRenderer.builder((b) => {b.tr(2);}),
        description: 'Raise your TR 2 steps. (The frontier expands.)'},
    });
  }
}
