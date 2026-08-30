import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class QuicksandMarsh extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.QUICKSAND_MARSH, tags: [Tag.BUILDING, Tag.MARS], cost: 9,
      metadata: {cardNumber: 'MY140', renderData: CardRenderer.builder((b) => {b.action('Draw 1 card.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Draw 1 card.. (The mystery deepens.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.drawCard(); return undefined;}
}
