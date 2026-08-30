import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard502 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_502, tags: [Tag.SCIENCE, Tag.MICROBE], cost: 10,
      behavior: {production: {titanium: 1}},
      metadata: {cardNumber: 'MY502', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(1);});}),
        description: 'Adjust production. (Progress demands sacrifice.)'},
    });
  }
}
