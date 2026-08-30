import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard500 extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.MYSTERY_CARD_500, tags: [Tag.POWER], cost: 16,
      metadata: {cardNumber: 'MY500', renderData: CardRenderer.builder((b) => {b.action('Draw 1 card.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Draw 1 card.. (Shadows hide secrets.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.drawCard(); return undefined;}
}
