import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TrapHiddenTax extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.TRAP_HIDDEN_TAX, tags: [], cost: 0,
      metadata: {cardNumber: 'TRAP035', renderData: CardRenderer.builder((b) => {b.action('TRAP: If oxygen at 4%+, gain 2 titanium.', (ab) => {ab.empty().startAction.text('TRAP');});}),
        description: 'Action: TRAP: If oxygen at 4%+, gain 2 titanium. (Triggers once automatically.)'},
    });
  }
  private triggered = false;
  public canAct(player: Player): boolean {
    try { return !this.triggered && player.game.getOxygenLevel() >= 4; } catch { return false; }
  }
  public action(player: Player) {
    try { this.triggered = true; player.titanium += 2; } catch {}
    return undefined;
  }
}
