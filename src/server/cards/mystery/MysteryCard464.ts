import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard464 extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.MYSTERY_CARD_464, tags: [Tag.MARS, Tag.JOVIAN], cost: 19,
      metadata: {cardNumber: 'MY464', renderData: CardRenderer.builder((b) => {b.action('Gain 1 energy.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 1 energy. (The stars align.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.energy += 1; return undefined;}
}
