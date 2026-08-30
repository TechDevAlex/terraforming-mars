import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TrapOxygenLeak extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.TRAP_OXYGEN_LEAK, tags: [], cost: 0,
      metadata: {cardNumber: 'TRAP017', renderData: CardRenderer.builder((b) => {b.action('TRAP: If you have 3+ cities, gain 5 MC.', (ab) => {ab.empty().startAction.text('TRAP');});}),
        description: 'TRAP: If you have 3+ cities, gain 5 MC. (Triggers once automatically.)'},
    });
  }
  private triggered = false;
  public canAct(player: Player): boolean {
    try { return !this.triggered && player.game.board.spaces.filter((s) => s.player === player && s.tile !== undefined).length >= 3; } catch { return false; }
  }
  public action(player: Player) {
    try { this.triggered = true; player.megaCredits += 5; } catch {}
    return undefined;
  }
}
