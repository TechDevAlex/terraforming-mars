import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard499 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_499, tags: [Tag.MARS, Tag.SPACE], cost: 17,
      behavior: {production: {heat: 2, megacredits: 2}},
      metadata: {cardNumber: 'MY499', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2); pb.megacredits(2);});}),
        description: 'Adjust production. (Knowledge is the ultimate currency.)'},
    });
  }
}
