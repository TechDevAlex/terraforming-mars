import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CipherWheel extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CIPHER_WHEEL, tags: [Tag.ANIMAL, Tag.PLANT], cost: 19,
      victoryPoints: 1,
      behavior: {production: {megacredits: 2, steel: 1}},
      metadata: {cardNumber: 'MY245', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Steel and will forge the path.)'},
    });
  }
}
