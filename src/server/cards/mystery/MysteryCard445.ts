import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard445 extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.MYSTERY_CARD_445, tags: [Tag.MARS, Tag.PLANT], cost: 5,
      metadata: {cardNumber: 'MY445', renderData: CardRenderer.builder((b) => {b.action('Spend 3 MC to gain 6 MC.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Spend 3 MC to gain 6 MC. (Nothing is as it seems.)'},
    });
  }
  public canAct(player: Player): boolean {return player.canAfford(3);}
  public action(player: Player) {player.megaCredits += 3; return undefined;}
}
