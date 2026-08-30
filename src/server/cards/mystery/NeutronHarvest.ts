import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class NeutronHarvest extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.NEUTRON_HARVEST, tags: [Tag.ANIMAL, Tag.POWER], cost: 18,
      metadata: {cardNumber: 'MY041', renderData: CardRenderer.builder((b) => {b.action('Spend 1 MC to draw a card.', (ab) => {ab.empty().startAction.text('?');});}),
        description: 'Action: Spend 1 MC to draw a card.. (Every clue matters.)'},
    });
  }
  public canAct(player: Player): boolean {return player.canAfford(1);}
  public action(player: Player) {player.megaCredits -= 1; player.drawCard(); return undefined;}
}
