import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {Resource} from '../../../common/Resource';
import {Board} from '../../boards/Board';

export class BuildACathedral extends Card implements IProjectCard, IActionCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.BUILD_A_CATHEDRAL,
      tags: [Tag.BUILDING, Tag.CITY],
      cost: 18,
      victoryPoints: 2,

      metadata: {
        cardNumber: 'BM11',
        description: 'Action: Gain 1 M€ for each city on Mars. 2 VP.',
        renderData: CardRenderer.builder((b) => {
          b.action('Gain 1 M€ for each city on Mars.', (ab) => {
            ab.empty().startAction.megacredits(1).slash().city();
          });
        }),
      },
    });
  }

  public canAct(): boolean {
    return true;
  }

  public action(player: Player) {
    const cities = player.game.board.spaces.filter((s) => Board.isCitySpace(s)).length;
    player.stock.add(Resource.MEGACREDITS, cities, {log: true});
    return undefined;
  }
}
