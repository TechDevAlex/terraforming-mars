import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class AsteroidCult extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.ASTEROID_CULT, tags: [Tag.SCIENCE, Tag.CITY], cost: 12,
      metadata: {cardNumber: 'MY049', renderData: CardRenderer.builder((b) => {b.action('Gain 2 heat.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 2 heat.. (Reality shifts.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.heat += 2; return undefined;}
}
