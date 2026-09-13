import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
export class CruciatusInterrogation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.CRUCIATUS_INTERROGATION, tags: [Tag.POWER], cost: 3,
      metadata: {cardNumber: 'HP75', renderData: CardRenderer.builder((b) => {b.minus().megacredits(3).asterix();}),
        description: 'Each opponent loses 3 M€. (The Cruciatus Curse—pain beyond imagining, the favorite tool of the merciless.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      opp.stock.deduct(Resource.MEGACREDITS, Math.min(opp.megaCredits, 3), {log: true, from: {player}});
    }
    return undefined;
  }
}
