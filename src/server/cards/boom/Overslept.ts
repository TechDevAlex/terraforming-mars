import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {SelectPlayer} from '../../inputs/SelectPlayer';

export class Overslept extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.OVERSLEPT,
      tags: [Tag.EARTH],
      cost: 5,
      victoryPoints: -1,

      metadata: {
        cardNumber: 'BM02',
        renderData: CardRenderer.builder((b) => {
          b.minus().megacredits(3).asterix().nbsp.megacredits(2);
        }),
        description: 'Choose a player. That player loses 3 M€. Gain 2 M€. -1 VP.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    return new SelectPlayer(player.opponents, 'Select player to oversleep').andThen((target) => {
      target.stock.deduct(Resource.MEGACREDITS, 3, {log: true, from: {player}});
      player.stock.add(Resource.MEGACREDITS, 2, {log: true});
      return undefined;
    });
  }
}
