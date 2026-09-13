import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
export class SectumsempraWound extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SECTUMSEMPRA_WOUND, tags: [Tag.POWER], cost: 12,
      metadata: {cardNumber: 'HP123', renderData: CardRenderer.builder((b) => {b.minus().production((pb) => pb.plants(1)).asterix().plants(1).asterix();}),
        description: 'Each opponent loses 1 plant production and 1 plant. (The Half-Blood Prince\'s spell—for enemies, written in the margin like a casual note.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      opp.production.add(Resource.PLANTS, -1, {log: true, from: {player}});
      opp.stock.deduct(Resource.PLANTS, Math.min(opp.plants, 1), {log: true, from: {player}});
    }
    return undefined;
  }
}
