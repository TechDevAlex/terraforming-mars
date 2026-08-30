import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TrapMcSiphon extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.TRAP_MC_SIPHON, tags: [], cost: 0,
      metadata: {cardNumber: 'TRAP010', renderData: CardRenderer.builder((b) => {b.action('TRAP: If generation 5+, gain 3 heat and 3 energy.', (ab) => {ab.empty().startAction.text('TRAP');});}),
        description: 'TRAP: If generation 5+, gain 3 heat and 3 energy. (Triggers once automatically.)'},
    });
  }
  private triggered = false;
  public canAct(player: Player): boolean {
    try { return !this.triggered && player.game.generation >= 5; } catch { return false; }
  }
  public action(player: Player) {
    try { this.triggered = true; player.heat += 3; player.energy += 3; } catch {}
    return undefined;
  }
}
