import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard518 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_518, tags: [Tag.MARS, Tag.ANIMAL], cost: 8,
      behavior: {production: {heat: 2}},
      metadata: {cardNumber: 'MY518', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2);});}),
        description: 'Adjust production. (The frontier expands.)'},
    });
  }
}
