import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard390 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_390, tags: [Tag.POWER, Tag.JOVIAN], cost: 50,
      behavior: {production: {titanium: 4, megacredits: 2}},
      metadata: {cardNumber: 'MY390', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(4); pb.megacredits(2);});}),
        description: 'Adjust production. (Secrets have power.)'},
    });
  }
}
