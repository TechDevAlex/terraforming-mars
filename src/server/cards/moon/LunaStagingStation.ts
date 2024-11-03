import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class LunaStagingStation extends Card {
  constructor() {
    super({
      name: CardName.LUNA_STAGING_STATION,
      type: CardType.AUTOMATED,
      tags: [Tag.MOON, Tag.BUILDING],
      cost: 7,
      reserveUnits: {titanium: 1},

      behavior: {
        moon: {
          roadTile: {},
        },
      },

      requirements: {logisticRate: 2},
      metadata: {
        description: 'Requires the logistic rate to be 2 or higher. Spend 1 titanium. Place 1 road.',
        cardNumber: 'M30',
        renderData: CardRenderer.builder((b) => {
          b.minus().titanium(1).br;
          b.moonRoad({amount: 1});
        }),
      },
    });
  }
}
