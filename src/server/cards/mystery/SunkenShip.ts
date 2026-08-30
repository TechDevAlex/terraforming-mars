import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SunkenShip extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.SUNKEN_SHIP, tags: [Tag.ANIMAL, Tag.PLANT], cost: 14,
      victoryPoints: 2,
      metadata: {cardNumber: 'MY267', renderData: CardRenderer.builder((b) => {b.action('Gain 1 energy.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 1 energy.. 2 VP. (Every clue matters.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.energy += 1; return undefined;}
}
