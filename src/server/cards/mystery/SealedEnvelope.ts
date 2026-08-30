import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SealedEnvelope extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SEALED_ENVELOPE, tags: [Tag.POWER], cost: 11,
      behavior: {stock: {plants: 5}},
      metadata: {cardNumber: 'MY259', renderData: CardRenderer.builder((b) => {b.text('Gain resources.');}),
        description: 'Gain resources. (Progress demands sacrifice.)'},
    });
  }
}
