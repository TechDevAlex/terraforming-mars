import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {Resource} from '../../../common/Resource';
import {CardResource} from '../../../common/CardResource';

export class FitnessStudioSubscription extends Card implements IProjectCard, IActionCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.FITNESS_STUDIO_SUBSCRIPTION,
      tags: [Tag.BUILDING, Tag.EARTH],
      cost: 12,
      resourceType: CardResource.DATA,

      metadata: {
        cardNumber: 'BM05',
        description: 'Starts with 3 tokens. Action: Remove 1 token. Each opponent pays you 3 M€.',
        renderData: CardRenderer.builder((b) => {
          b.action('Remove 1 token. Each opponent pays you 3 M€.', (ab) => {
            ab.minus().resource(CardResource.DATA).startAction.megacredits(3).asterix();
          });
        }),
      },
    });
  }

  public override bespokePlay(player: Player) {
    player.addResourceTo(this, 3);
    return undefined;
  }

  public canAct(): boolean {
    return this.resourceCount > 0;
  }

  public action(player: Player) {
    this.resourceCount--;
    for (const opponent of player.opponents) {
      const amount = Math.min(opponent.megaCredits, 3);
      opponent.stock.deduct(Resource.MEGACREDITS, amount, {log: true, from: {player}});
      player.stock.add(Resource.MEGACREDITS, amount, {log: true});
    }
    return undefined;
  }
}
