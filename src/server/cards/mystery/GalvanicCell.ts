import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GalvanicCell extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.GALVANIC_CELL, tags: [Tag.BUILDING], cost: 12,
      victoryPoints: -1,
      metadata: {cardNumber: 'MY280', renderData: CardRenderer.builder((b) => {b.action('Spend 2 MC to draw a card.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Spend 2 MC to draw a card.. -1 VP. (Nature finds a way.)'},
    });
  }
  public canAct(player: Player): boolean {return player.canAfford(2);}
  public action(player: Player) {player.megaCredits -= 2; player.drawCard(); return undefined;}
}
