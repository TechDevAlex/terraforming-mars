import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DeepSpaceSignal extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.DEEP_SPACE_SIGNAL, tags: [Tag.POWER, Tag.SPACE], cost: 15,
      metadata: {cardNumber: 'MY052', renderData: CardRenderer.builder((b) => {b.action('Draw 1 card.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Draw 1 card.. (Darkness falls.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.drawCard(); return undefined;}
}
