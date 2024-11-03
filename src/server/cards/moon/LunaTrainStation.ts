import {CardName} from '../../../common/cards/CardName';
import {IPlayer} from '../../IPlayer';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {MoonExpansion} from '../../moon/MoonExpansion';
import {TileType} from '../../../common/TileType';
import {CardRenderDynamicVictoryPoints} from '../render/CardRenderDynamicVictoryPoints';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {digit} from '../Options';

export class LunaTrainStation extends Card {
  constructor() {
    super({
      name: CardName.LUNA_TRAIN_STATION,
      type: CardType.AUTOMATED,
      tags: [Tag.BUILDING, Tag.MOON],
      cost: 24,
      reserveUnits: {steel: 2},
      victoryPoints: 'special',

      behavior: {
        production: {megacredits: 2},
        moon: {
          tile: {type: TileType.LUNA_TRAIN_STATION},
          roadTile: {},
        },
      },

      requirements: {logisticRate: 5},

      metadata: {
        description: 'Requires a logistic rate of 5 or higher. Spend 2 steel. ' +
        'Increase your M€ production 4 steps. Place this tile on The Moon and build road yeah! ' +
        '2 VP FOR EACH ROAD TILE ADJACENT TO THIS TILE.',
        cardNumber: 'M15',
        renderData: CardRenderer.builder((b) => {
          b.minus().steel(2, {digit});
          b.production((pb) => pb.megacredits(2));
          b.tile(TileType.LUNA_TRAIN_STATION, true).moonRoad();
        }),
        victoryPoints: CardRenderDynamicVictoryPoints.moonRoadTile(2, true),
      },
    });
  }

  public override getVictoryPoints(player: IPlayer) {
    const moonData = MoonExpansion.moonData(player.game);
    const usedSpace = moonData.moon.getSpaceByTileCard(this.name);
    if (usedSpace !== undefined) {
      const adjacentSpaces = moonData.moon.getAdjacentSpaces(usedSpace);
      const adjacentMines = adjacentSpaces.filter((s) => MoonExpansion.spaceHasType(s, TileType.MOON_ROAD));
      return 2 * adjacentMines.length;
    }
    return 0;
  }
}
