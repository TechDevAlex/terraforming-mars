import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard475 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_475, tags: [Tag.ANIMAL, Tag.MICROBE], cost: 21,
      behavior: {production: {megacredits: 4, plants: 2}},
      metadata: {cardNumber: 'MY475', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(4); pb.plants(2);});}),
        description: 'Adjust production. (Every clue matters.)'},
    });
  }
}
