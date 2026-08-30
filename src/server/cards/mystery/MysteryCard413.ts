import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard413 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_413, tags: [Tag.SCIENCE, Tag.SPACE], cost: 23,
      victoryPoints: -1,
      behavior: {production: {heat: 3, plants: 2}},
      metadata: {cardNumber: 'MY413', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(3); pb.plants(2);});}),
        description: '-1 VP. (The truth is out there.)'},
    });
  }
}
