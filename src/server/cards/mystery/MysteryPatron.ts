import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryPatron extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_PATRON, tags: [Tag.CITY], cost: 10,
      behavior: {production: {plants: 2}},
      metadata: {cardNumber: 'MY246', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(2);});}),
        description: 'Adjust production. (Every clue matters.)'},
    });
  }
}
