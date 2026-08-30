import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class LucidDreamLab extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.LUCID_DREAM_LAB, tags: [Tag.SPACE, Tag.ANIMAL], cost: 20,
      behavior: {production: {steel: 2}},
      metadata: {cardNumber: 'MY337', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(2);});}),
        description: 'Adjust production. (Every clue matters.)'},
    });
  }
}
