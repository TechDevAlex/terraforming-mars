import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard457 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_457, tags: [Tag.SCIENCE], cost: 3,
      behavior: {production: {energy: 1}},
      metadata: {cardNumber: 'MY457', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(1);});}),
        description: 'Adjust production. (Steel and will forge the path.)'},
    });
  }
}
