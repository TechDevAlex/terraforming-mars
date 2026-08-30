import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';

export class LeakyCauldron extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.LEAKY_CAULDRON,
      tags: [Tag.BUILDING],
      cost: 6,

      metadata: {
        cardNumber: 'HP05',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 plants to gain 3 M€.', (ab) => {
            ab.plants(2).startAction.megacredits(3);
          });
        }),
        description: 'Action: Spend 2 plants to gain 3 M€. (The Leaky Cauldron — the dingy but beloved pub that serves as the gateway between Muggle London and Diagon Alley.)',
      },
    });
  }

  public canAct(player: Player): boolean {
    return player.plants >= 2;
  }

  public action(player: Player) {
    player.stock.deduct(Resource.PLANTS, 2);
    player.stock.add(Resource.MEGACREDITS, 3, {log: true});
    return undefined;
  }
}
