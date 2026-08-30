import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard398 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_398, tags: [Tag.EARTH], cost: 8,
      behavior: {production: {plants: 1}},
      metadata: {cardNumber: 'MY398', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(1);});}),
        description: 'Adjust production. (Trust no one.)'},
    });
  }
}
