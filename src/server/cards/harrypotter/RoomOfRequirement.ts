import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class RoomOfRequirement extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ROOM_OF_REQUIREMENT,
      tags: [Tag.SCIENCE],
      cost: 8,

      metadata: {
        cardNumber: 'HP03',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 M€ to draw a card.', (ab) => {
            ab.megacredits(2).startAction.cards(1);
          });
        }),
        description: 'Action: Spend 2 M€ to draw a card.',
      },
    });
  }

  public canAct(player: Player): boolean {
    return player.canAfford(2);
  }

  public action(player: Player) {
    player.megaCredits -= 2;
    player.drawCard();
    return undefined;
  }
}
