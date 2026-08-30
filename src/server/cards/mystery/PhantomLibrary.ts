import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PhantomLibrary extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.PHANTOM_LIBRARY, tags: [Tag.ANIMAL, Tag.MICROBE], cost: 10,
      behavior: {production: {megacredits: 2}},
      metadata: {cardNumber: 'MY079', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(2);});}),
        description: 'Adjust production. (Space warps.)'},
    });
  }
}
