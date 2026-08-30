import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class LunaLovegoodsInsight extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.LUNA_LOVEGOODS_INSIGHT, tags: [Tag.SCIENCE], cost: 9,
      behavior: {drawCard: 3},
      metadata: {cardNumber: 'HP29', renderData: CardRenderer.builder((b) => {b.cards(3);}),
        description: 'Draw 3 cards. (You\'re just as sane as I am, Luna said, seeing what others refused to notice.)'},
    });
  }
}
