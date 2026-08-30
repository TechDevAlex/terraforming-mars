import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SolarSail extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SOLAR_SAIL, tags: [Tag.SCIENCE, Tag.POWER], cost: 8,
      victoryPoints: -2,
      behavior: {stock: {titanium: 2}},
      metadata: {cardNumber: 'MY300', renderData: CardRenderer.builder((b) => {b.text('Gain resources.');}),
        description: '-2 VP. (Knowledge is the ultimate currency.)'},
    });
  }
}
