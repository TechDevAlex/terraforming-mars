import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard508 extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.MYSTERY_CARD_508, tags: [Tag.POWER, Tag.BUILDING], cost: 16,
      metadata: {cardNumber: 'MY508', renderData: CardRenderer.builder((b) => {b.action('Draw 1 card.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Draw 1 card.. (The plot thickens.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.drawCard(); return undefined;}
}
