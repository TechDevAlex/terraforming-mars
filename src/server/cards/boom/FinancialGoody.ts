import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {SelectPlayer} from '../../inputs/SelectPlayer';

export class FinancialGoody extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.FINANCIAL_GOODY,
      tags: [Tag.EARTH],
      cost: 15,

      metadata: {
        cardNumber: 'BM04',
        description: 'Select a player. Gain M€ production equal to half of their M€ production (rounded down).',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1)).text('(half of opponent)');
        }),
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    return new SelectPlayer(player.opponents, 'Select a player to copy half of their M€ production').andThen((opponent) => {
      const stolen = Math.floor(opponent.production.megacredits / 2);
      player.production.add(Resource.MEGACREDITS, stolen, {log: true});
      return undefined;
    });
  }
}
