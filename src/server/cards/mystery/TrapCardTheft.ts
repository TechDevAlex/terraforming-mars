import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TrapCardTheft extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.TRAP_CARD_THEFT, tags: [], cost: 0,
      metadata: {cardNumber: 'TRAP004', renderData: CardRenderer.builder((b) => {b.action('TRAP: If you have 5+ tags, gain 3 steel.', (ab) => {ab.empty().startAction.text('TRAP');});}),
        description: 'Action: TRAP: If you have 5+ tags, gain 3 steel. (Triggers once automatically.)'},
    });
  }
  private triggered = false;
  public canAct(player: Player): boolean {
    try { return !this.triggered && player.playedCards.length >= 5; } catch { return false; }
  }
  public action(player: Player) {
    try { this.triggered = true; player.steel += 3; } catch {}
    return undefined;
  }
}
