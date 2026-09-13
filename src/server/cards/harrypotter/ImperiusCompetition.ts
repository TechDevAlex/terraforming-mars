import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';

export class ImperiusCompetition extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.IMPERIUS_COMPETITION, tags: [Tag.POWER], cost: 10,
      metadata: {cardNumber: 'HP206', renderData: CardRenderer.builder((b) => {
        b.megacredits(3).slash().text('opp').br.minus().megacredits(3).slash().text('opp');
      }), description: 'Gain 3 M€ per opponent. Each opponent loses 3 M€. (You will do as I command, and thank me for the privilege.)'}
    });
  }
  public override bespokePlay(player: IPlayer) {
    player.stock.add(Resource.MEGACREDITS, 3 * player.opponents.length, {log: true});
    for (const opp of player.opponents) {
      opp.stock.deduct(Resource.MEGACREDITS, Math.min(opp.megaCredits, 3), {log: true, from: {player}});
    }
    return undefined;
  }
}
