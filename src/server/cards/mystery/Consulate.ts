import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class Consulate extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.CONSULATE, tags: [Tag.MARS, Tag.SPACE], cost: 10,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY208', renderData: CardRenderer.builder((b) => {b.text('Place an ocean.');}),
        description: 'Place an ocean. (The unknown beckons.)'},
    });
  }
}
