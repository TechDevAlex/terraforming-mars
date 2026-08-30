import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TrapPitfall extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.TRAP_PITFALL, tags: [], cost: 0,
      metadata: {cardNumber: 'TRAP029', renderData: CardRenderer.builder((b) => {b.action('TRAP: If you have 30+ MC, gain 1 TR.', (ab) => {ab.empty().startAction.text('TRAP');});}),
        description: 'TRAP: If you have 30+ MC, gain 1 TR. (Triggers once automatically.)'},
    });
  }
  private triggered = false;
  public canAct(player: Player): boolean {
    try { return !this.triggered && player.megaCredits >= 30; } catch { return false; }
  }
  public action(player: Player) {
    try { this.triggered = true; player.increaseTerraformRating(); } catch {}
    return undefined;
  }
}
