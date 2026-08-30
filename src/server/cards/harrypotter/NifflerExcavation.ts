import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';import {IPlayer} from '../../IPlayer';import {Resource} from '../../../common/Resource';import {SelectPlayer} from '../../inputs/SelectPlayer';
export class NifflerExcavation extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.NIFFLER_EXCAVATION, tags: [Tag.ANIMAL], cost: 7, behavior: {stock: {titanium: 1}}, metadata: {cardNumber: 'HP98', renderData: CardRenderer.builder((b) => {b.titanium(1).text('STEAL 3').megacredits(1);}), description: 'Gain 1 titanium. Steal 3 M€ from an opponent. (The furry little treasure-hunters will strip a room bare in minutes flat.)'}});}
  public override bespokePlay(player: IPlayer) {
    if (player.opponents.length > 0) {
      return new SelectPlayer(player.opponents, 'Select target for Niffler').andThen((target) => {
        const amt = Math.min(target.megaCredits, 3); target.stock.deduct(Resource.MEGACREDITS, amt, {log: true, from: {player}}); player.stock.add(Resource.MEGACREDITS, amt, {log: true});
        return undefined;});
    }
    return undefined;
  }
}
