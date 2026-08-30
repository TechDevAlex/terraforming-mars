import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {Board} from '../../boards/Board';
import * as DynamicVictoryPoints from '../render/DynamicVictoryPoints';

export class GoldenGateBridge extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.GOLDEN_GATE_BRIDGE,
      tags: [Tag.BUILDING, Tag.CITY],
      cost: 25,
      victoryPoints: 'special',

      behavior: {
        city: {},
      },

      metadata: {
        cardNumber: 'BM08',
        description: 'Place a city. 2 VP per adjacent city.',
        victoryPoints: DynamicVictoryPoints.cities(2, 1, true),
        renderData: CardRenderer.builder((b) => {
          b.city().br;
          b.vpText('2 VP per adjacent city.');
        }),
      },
    });
  }

  public override getVictoryPoints(player: IPlayer): number {
    const space = player.game.board.spaces.find((s) => s.tile?.card === this.name);
    if (space === undefined) return 0;
    const adjacentCities = player.game.board.getAdjacentSpaces(space).filter((s) => Board.isCitySpace(s));
    return adjacentCities.length * 2;
  }
}
