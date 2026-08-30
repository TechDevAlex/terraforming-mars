import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard426 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_426, tags: [Tag.PLANT], cost: 4,
      behavior: {production: {heat: 2}},
      metadata: {cardNumber: 'MY426', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2);});}),
        description: 'Adjust production. (Innovation breeds opportunity.)'},
    });
  }
}
