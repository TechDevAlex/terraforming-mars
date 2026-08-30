import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard468 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.MYSTERY_CARD_468, tags: [Tag.MICROBE], cost: 18,
      behavior: {global: {oxygen: 1}},
      metadata: {cardNumber: 'MY468', renderData: CardRenderer.builder((b) => {b.text('Raise global parameter.');}),
        description: 'Raise oxygen 1 step. (Secrets have power.)'},
    });
  }
}
