import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CipherCore extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.CIPHER_CORE, tags: [Tag.MARS], cost: 5,
      behavior: {global: {oxygen: 1}},
      metadata: {cardNumber: 'MY092', renderData: CardRenderer.builder((b) => {b.oxygen(1);}),
        description: 'Raise oxygen 1 step. (The frontier expands.)'},
    });
  }
}
