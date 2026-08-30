import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard395 extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.MYSTERY_CARD_395, tags: [Tag.BUILDING], cost: 15,
      metadata: {cardNumber: 'MY395', renderData: CardRenderer.builder((b) => {b.action('Spend 3 MC to gain 6 MC.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Spend 3 MC to gain 6 MC.. (Steel and will forge the path.)'},
    });
  }
  public canAct(player: Player): boolean {return player.canAfford(3);}
  public action(player: Player) {player.megaCredits += 3; return undefined;}
}
