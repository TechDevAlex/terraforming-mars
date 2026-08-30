import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {Resource} from '../../../common/Resource';

export class Coinflip extends Card implements IProjectCard, IActionCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.COINFLIP,
      tags: [Tag.SCIENCE],
      cost: 8,
      metadata: {
        cardNumber: 'BM01',
        renderData: CardRenderer.builder((b) => {
          b.action('50% chance to gain 1 TR, 50% chance to gain 1 MC production.', (ab) => {
            ab.empty().startAction.text('?');
          });
        }),
      },
    });
  }

  public canAct(): boolean {
    return true;
  }

  public action(player: Player): undefined {
    if (Math.random() < 0.5) {
      player.increaseTerraformRating();
      player.game.log('${0} flipped heads and gained 1 TR', (b) => b.player(player));
    } else {
      player.production.add(Resource.MEGACREDITS, 1, {log: true});
      player.game.log('${0} flipped tails and gained 1 MC production', (b) => b.player(player));
    }
    return undefined;
  }
}
