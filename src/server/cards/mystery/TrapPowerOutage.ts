import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TrapPowerOutage extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.TRAP_POWER_OUTAGE, tags: [], cost: 0,
      metadata: {cardNumber: 'TRAP041', renderData: CardRenderer.builder((b) => {b.action('TRAP: If opponent has 20+ MC, gain 3 MC.', (ab) => {ab.empty().startAction.text('TRAP');});}),
        description: 'TRAP: If opponent has 20+ MC, gain 3 MC. (Triggers once automatically.)'},
    });
  }
  private triggered = false;
  public canAct(player: Player): boolean {
    try { return !this.triggered && player.opponents.some((o) => o.megaCredits >= 20); } catch { return false; }
  }
  public action(player: Player) {
    try { this.triggered = true; player.megaCredits += 3; } catch {}
    return undefined;
  }
}
