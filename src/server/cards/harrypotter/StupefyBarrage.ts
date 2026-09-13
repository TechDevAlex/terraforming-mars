import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
export class StupefyBarrage extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.STUPEFY_BARRAGE, tags: [Tag.POWER, Tag.SPACE], cost: 4,
      metadata: {cardNumber: 'HP54', renderData: CardRenderer.builder((b) => {b.minus().energy(1).asterix().heat(1).asterix();}),
        description: 'Each opponent loses 1 energy and 1 heat. (Red jets of light filled the corridor as the defenders held their ground.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      opp.stock.deduct(Resource.ENERGY, Math.min(opp.energy, 1), {log: true, from: {player}});
      opp.stock.deduct(Resource.HEAT, Math.min(opp.heat, 1), {log: true, from: {player}});
    }
    return undefined;
  }
}
