import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
export class NifflerExcavation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.NIFFLER_EXCAVATION, tags: [Tag.BUILDING], cost: 5,
      behavior: {stock: {titanium: 1}},
      metadata: {cardNumber: 'HP98', renderData: CardRenderer.builder((b) => {b.titanium(1).text('STEAL 1').megacredits(1).asterix();}),
        description: 'Gain 1 titanium. Steal 1 M€ from each opponent. (The furry little treasure-hunters will strip a room bare in minutes flat.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      const amt = Math.min(opp.megaCredits, 1);
      opp.stock.deduct(Resource.MEGACREDITS, amt, {log: true, from: {player}});
      player.stock.add(Resource.MEGACREDITS, amt, {log: true});
    }
    return undefined;
  }
}
