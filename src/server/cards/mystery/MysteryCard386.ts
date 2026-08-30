import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard386 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_386, tags: [Tag.JOVIAN], cost: 15,
      behavior: {production: {steel: 2}},
      metadata: {cardNumber: 'MY386', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(2);});}),
        description: 'Adjust production. (Shadows hide secrets.)'},
    });
  }
}
