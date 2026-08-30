import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TrapRecession extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.TRAP_RECESSION, tags: [], cost: 0,
      metadata: {cardNumber: 'TRAP052', renderData: CardRenderer.builder((b) => {b.action('TRAP: If temperature reached -10C, gain 1 TR.', (ab) => {ab.empty().startAction.text('TRAP');});}),
        description: 'TRAP: If temperature reached -10C, gain 1 TR. (Triggers once automatically.)'},
    });
  }
  private triggered = false;
  public canAct(player: Player): boolean {
    try { return !this.triggered && player.game.getTemperature() >= -10; } catch { return false; }
  }
  public action(player: Player) {
    try { this.triggered = true; player.increaseTerraformRating(); } catch {}
    return undefined;
  }
}
