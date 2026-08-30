import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ForgedDocuments extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.FORGED_DOCUMENTS, tags: [Tag.CITY], cost: 7,
      victoryPoints: 3,
      metadata: {cardNumber: 'MY026', renderData: CardRenderer.builder((b) => {b.action('Gain 2 heat.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Gain 2 heat.. 3 VP. (Trust no one.)'},
    });
  }
  public canAct(_player: Player): boolean {return true;}
  public action(player: Player) {player.heat += 2; return undefined;}
}
