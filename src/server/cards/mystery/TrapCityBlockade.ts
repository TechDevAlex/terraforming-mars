import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TrapCityBlockade extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.TRAP_CITY_BLOCKADE, tags: [], cost: 0,
      metadata: {cardNumber: 'TRAP013', renderData: CardRenderer.builder((b) => {b.action('TRAP: If 3+ oceans placed, gain 4 plants.', (ab) => {ab.empty().startAction.text('TRAP');});}),
        description: 'Action: TRAP: If 3+ oceans placed, gain 4 plants. (Triggers once automatically.)'},
    });
  }
  private triggered = false;
  public canAct(player: Player): boolean {
    try { return !this.triggered && player.game.board.getOceanSpaces().length >= 3; } catch { return false; }
  }
  public action(player: Player) {
    try { this.triggered = true; player.plants += 4; } catch {}
    return undefined;
  }
}
