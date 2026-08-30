import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard470 extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.MYSTERY_CARD_470, tags: [Tag.BUILDING, Tag.EARTH], cost: 18,
      metadata: {cardNumber: 'MY470', renderData: CardRenderer.builder((b) => {b.action('Gain 1 titanium.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 1 titanium. (The stars align.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.titanium += 1; return undefined;}
}
