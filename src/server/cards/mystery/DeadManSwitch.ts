import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DeadManSwitch extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.DEAD_MAN_SWITCH, tags: [Tag.EARTH, Tag.BUILDING], cost: 20,
      metadata: {cardNumber: 'MY114', renderData: CardRenderer.builder((b) => {b.action('Gain 2 heat.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 2 heat.. (The unknown beckons.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.heat += 2; return undefined;}
}
