import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IActionCard} from '../ICard';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {Size} from '../../../common/cards/render/Size';

export class OrderOfThePhoenix extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ORDER_OF_THE_PHOENIX,
      tags: [Tag.SCIENCE, Tag.BUILDING],
      cost: 12,
      resourceType: CardResource.AGENDA,

      metadata: {
        cardNumber: 'HP15',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 agenda to this card.', (ab) => {
            ab.empty().startAction.resource(CardResource.AGENDA);
          });
          b.br;
          b.text('When you have 5+ agendas here, all cards you play cost 3 M€ less.', Size.SMALL, true);
        }),
        description: 'Action: Add 1 agenda resource to this card. When you have 5 or more agendas here, all cards you play cost 3 M€ less. (The Order of the Phoenix — Dumbledore\'s secret society, quietly gathering strength against the Dark Lord.)',
      },
    });
  }

  public canAct(): boolean {
    return true;
  }

  public action(player: Player) {
    player.addResourceTo(this, {log: true});
    return undefined;
  }

  public override getCardDiscount() {
    if (this.resourceCount >= 5) {
      return 3;
    }
    return 0;
  }
}
