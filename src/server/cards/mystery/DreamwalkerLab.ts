import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DreamwalkerLab extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.DREAMWALKER_LAB, tags: [Tag.CITY], cost: 30,
      behavior: {production: {steel: 4}},
      metadata: {cardNumber: 'MY087', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(4);});}),
        description: 'Adjust production. (The mystery deepens.)'},
    });
  }
}
