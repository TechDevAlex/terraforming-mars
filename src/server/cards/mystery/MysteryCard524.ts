import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard524 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_524, tags: [Tag.CITY, Tag.SPACE], cost: 22,
      behavior: {production: {steel: 1}},
      metadata: {cardNumber: 'MY524', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(1);});}),
        description: 'Adjust production. (The truth is out there.)'},
    });
  }
}
