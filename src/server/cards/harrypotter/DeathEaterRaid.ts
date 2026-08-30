import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
export class DeathEaterRaid extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.DEATH_EATER_RAID, tags: [], cost: 8,
      metadata: {cardNumber: 'HP45', renderData: CardRenderer.builder((b) => {b.minus().megacredits(2).asterix().steel(1).asterix();}),
        description: 'Each opponent loses 2 M€ and 1 steel. (Dark Marks blazed above the village as screams filled the night.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      opp.stock.deduct(Resource.MEGACREDITS, Math.min(opp.megaCredits, 2), {log: true, from: {player}});
      opp.stock.deduct(Resource.STEEL, Math.min(opp.steel, 1), {log: true, from: {player}});
    }
    return undefined;
  }
}
