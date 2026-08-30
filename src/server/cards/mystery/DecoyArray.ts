import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DecoyArray extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.DECOY_ARRAY, tags: [], cost: 7,
      victoryPoints: 1,
      metadata: {cardNumber: 'MY095', renderData: CardRenderer.builder((b) => {b.action('Gain 1 steel and 1 titanium.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 1 steel and 1 titanium.. 1 VP. (Nature finds a way.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.steel += 1; player.titanium += 1; return undefined;}
}
