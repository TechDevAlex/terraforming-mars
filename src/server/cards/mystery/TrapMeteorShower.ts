import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TrapMeteorShower extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.TRAP_METEOR_SHOWER, tags: [], cost: 0,
      metadata: {cardNumber: 'TRAP058', renderData: CardRenderer.builder((b) => {b.action('TRAP: If opponent has 10+ steel, steal 2.', (ab) => {ab.empty().startAction.text('TRAP');});}),
        description: 'Action: TRAP: If opponent has 10+ steel, steal 2. (Triggers once automatically.)'},
    });
  }
  private triggered = false;
  public canAct(player: Player): boolean {
    try { return !this.triggered && player.opponents.some((o) => o.steel >= 10); } catch { return false; }
  }
  public action(player: Player) {
    try { this.triggered = true; player.steel += 2; } catch {}
    return undefined;
  }
}
