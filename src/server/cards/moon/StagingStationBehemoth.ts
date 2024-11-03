import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class StagingStationBehemoth extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.STAGING_STATION_BEHEMOTH,
      type: CardType.AUTOMATED,
      tags: [Tag.SPACE],
      cost: 16,

      behavior: {
        moon: {roadTile: {}},
        colonies: {addTradeFleet: 2},
      },

      metadata: {
        description: 'Gain 2 Trade Fleets. Place a road.',
        cardNumber: 'M68',
        renderData: CardRenderer.builder((b) => {
          b.tradeFleet().tradeFleet().moonRoad();
        }),
      },
    });
  }
}
