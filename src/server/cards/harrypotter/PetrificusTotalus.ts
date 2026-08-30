import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
import {all, digit} from '../Options';

export class PetrificusTotalus extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.PETRIFICUS_TOTALUS,
      tags: [Tag.SPACE],
      cost: 3,

      metadata: {
        cardNumber: 'HP11',
        renderData: CardRenderer.builder((b) => {
          b.minus().megacredits(3, {all, digit}).asterix();
        }),
        description: 'Every other player loses 3 M€. (Petrificus Totalus — the Full Body-Bind Curse. Your arms snap to your sides, your legs lock together, and you topple like a board.)',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    for (const opponent of player.opponents) {
      opponent.stock.deduct(Resource.MEGACREDITS, 3, {log: true, from: {player}});
    }
    return undefined;
  }
}
