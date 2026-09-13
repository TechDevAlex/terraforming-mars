import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
export class SnatcherSquad extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SNATCHER_SQUAD, tags: [Tag.MARS, Tag.SPACE], cost: 8,
      metadata: {cardNumber: 'HP181', renderData: CardRenderer.builder((b) => {b.text('STEAL').plants(1).steel(1).asterix();}),
        description: 'Steal 1 plant and 1 steel from each opponent. (Bounty hunters roamed the countryside, dragging Muggle-borns to the Ministry.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      const p = Math.min(opp.plants, 1);
      opp.stock.deduct(Resource.PLANTS, p, {log: true, from: {player}});
      player.stock.add(Resource.PLANTS, p, {log: true});
      const s = Math.min(opp.steel, 1);
      opp.stock.deduct(Resource.STEEL, s, {log: true, from: {player}});
      player.stock.add(Resource.STEEL, s, {log: true});
    }
    return undefined;
  }
}
