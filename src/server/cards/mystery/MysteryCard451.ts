import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard451 extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.MYSTERY_CARD_451, tags: [], cost: 14,
      metadata: {cardNumber: 'MY451', renderData: CardRenderer.builder((b) => {b.action('Gain 3 MC.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 3 MC.. (Time bends.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.megaCredits += 3; return undefined;}
}
