import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GeothermalTap extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.GEOTHERMAL_TAP, tags: [Tag.JOVIAN], cost: 6,
      behavior: {stock: {titanium: 3}},
      metadata: {cardNumber: 'MY133', renderData: CardRenderer.builder((b) => {b.text('Gain resources.');}),
        description: 'Gain resources. (Space warps.)'},
    });
  }
}
