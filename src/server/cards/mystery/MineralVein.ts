import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MineralVein extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.MINERAL_VEIN, tags: [], cost: 8,
      metadata: {cardNumber: 'MY134', renderData: CardRenderer.builder((b) => {b.action('Gain 2 heat.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 2 heat.. (A whisper in the void.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.heat += 2; return undefined;}
}
