import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard418 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_418, tags: [Tag.SCIENCE], cost: 15,
      behavior: {production: {steel: 1, plants: 1}},
      metadata: {cardNumber: 'MY418', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(1); pb.plants(1);});}),
        description: 'Adjust production. (Reality shifts.)'},
    });
  }
}
