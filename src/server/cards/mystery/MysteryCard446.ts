import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard446 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_446, tags: [Tag.POWER, Tag.CITY], cost: 20,
      victoryPoints: -2,
      behavior: {production: {titanium: 2, plants: 2}},
      metadata: {cardNumber: 'MY446', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(2); pb.plants(2);});}),
        description: '-2 VP. (Nature finds a way.)'},
    });
  }
}
