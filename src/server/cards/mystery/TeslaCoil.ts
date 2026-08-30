import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TeslaCoil extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.TESLA_COIL, tags: [Tag.BUILDING], cost: 19,
      victoryPoints: -1,
      behavior: {stock: {steel: 4}},
      metadata: {cardNumber: 'MY276', renderData: CardRenderer.builder((b) => {b.text('Gain resources.');}),
        description: '-1 VP. (The stars align.)'},
    });
  }
}
