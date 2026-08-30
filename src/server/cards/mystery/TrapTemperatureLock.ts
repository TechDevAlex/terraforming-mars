import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TrapTemperatureLock extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.TRAP_TEMPERATURE_LOCK, tags: [], cost: 0,
      metadata: {cardNumber: 'TRAP016', renderData: CardRenderer.builder((b) => {b.action('TRAP: If generation 3+, draw 2 cards.', (ab) => {ab.empty().startAction.text('TRAP');});}),
        description: 'TRAP: If generation 3+, draw 2 cards. (Triggers once automatically.)'},
    });
  }
  private triggered = false;
  public canAct(player: Player): boolean {
    try { return !this.triggered && player.game.generation >= 3; } catch { return false; }
  }
  public action(player: Player) {
    try { this.triggered = true; player.drawCard(2); } catch {}
    return undefined;
  }
}
