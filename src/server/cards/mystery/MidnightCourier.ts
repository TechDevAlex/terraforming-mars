import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MidnightCourier extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.MIDNIGHT_COURIER, tags: [Tag.JOVIAN], cost: 14,
      metadata: {cardNumber: 'MY002', renderData: CardRenderer.builder((b) => {b.action('Gain 2 plants.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 2 plants.. (Every clue matters.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.plants += 2; return undefined;}
}
