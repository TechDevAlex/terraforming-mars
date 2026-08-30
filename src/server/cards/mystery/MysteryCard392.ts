import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard392 extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.MYSTERY_CARD_392, tags: [Tag.PLANT, Tag.BUILDING], cost: 14,
      victoryPoints: 1,
      metadata: {cardNumber: 'MY392', renderData: CardRenderer.builder((b) => {b.action('Gain 2 plants.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 2 plants.. 1 VP. (Reality shifts.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.plants += 2; return undefined;}
}
