import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GetawayDriver extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.GETAWAY_DRIVER, tags: [Tag.CITY, Tag.MARS], cost: 17,
      victoryPoints: -2,
      behavior: {stock: {steel: 4}},
      metadata: {cardNumber: 'MY023', renderData: CardRenderer.builder((b) => {b.text('Gain resources.');}),
        description: 'Gain resources. (Secrets have power.)'},
    });
  }
}
