import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {AltSecondaryTag} from '../../../common/cards/render/AltSecondaryTag';

export class AristarchusRoadNetwork extends Card {
  constructor() {
    super({
      name: CardName.ARISTARCHUS_ROAD_NETWORK,
      type: CardType.AUTOMATED,
      tags: [Tag.MOON],
      cost: 13,
      reserveUnits: {steel: 1},

      behavior: {
        production: {megacredits: 2},
        moon: {
          roadTile: {},
        },
      },

      metadata: {
        description: 'Spend 1 steel. Increase your M€ production 2 steps. ' +
        'Place a road tile on The Moon and raise the Logistics Rate 1 step.',
        cardNumber: 'M10',
        renderData: CardRenderer.builder((b) => {
          b.minus().steel(1).nbsp.production((eb) => eb.megacredits(2)).br;
          b.moonRoad({secondaryTag: AltSecondaryTag.MOON_LOGISTICS_RATE});
        }),
      },
    });
  }
}
