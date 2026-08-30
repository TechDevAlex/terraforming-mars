import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class WhompingWillow extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.WHOMPING_WILLOW, tags: [Tag.PLANT], cost: 7,
      behavior: {greenery: {}},
      metadata: {cardNumber: 'HP48', renderData: CardRenderer.builder((b) => {b.greenery();}),
        description: 'Place a greenery tile. (The ancient tree guards the secret passage—and pummels anything that gets too close.)'},
    });
  }
}
