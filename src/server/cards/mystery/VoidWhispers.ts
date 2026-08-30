import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class VoidWhispers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.VOID_WHISPERS, tags: [Tag.ANIMAL], cost: 9,
      behavior: {stock: {plants: 5}},
      metadata: {cardNumber: 'MY031', renderData: CardRenderer.builder((b) => {b.plants(5);}),
        description: 'Gain resources. (The veil lifts.)'},
    });
  }
}
