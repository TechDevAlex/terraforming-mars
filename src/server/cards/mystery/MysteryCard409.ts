import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard409 extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.MYSTERY_CARD_409, tags: [], cost: 11,
      metadata: {cardNumber: 'MY409', renderData: CardRenderer.builder((b) => {b.action('Spend 1 MC to draw a card.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Spend 1 MC to draw a card.. (A whisper in the void.)'},
    });
  }
  public canAct(player: Player): boolean {return player.canAfford(1);}
  public action(player: Player) {player.megaCredits -= 1; player.drawCard(); return undefined;}
}
