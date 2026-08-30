import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';import {IPlayer} from '../../IPlayer';import {Resource} from '../../../common/Resource';import {SelectPlayer} from '../../inputs/SelectPlayer';
export class SnatcherSquad extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.SNATCHER_SQUAD, tags: [Tag.MARS], cost: 10, metadata: {cardNumber: 'HP181', renderData: CardRenderer.builder((b) => {b.text('STEAL').plants(3).steel(1);}), description: 'Steal 3 plants and 1 steel from an opponent. (Bounty hunters roamed the countryside, dragging Muggle-borns to the Ministry.)'}});}
  public override bespokePlay(player: IPlayer) {
    return new SelectPlayer(player.opponents, 'Select target for Snatcher Squad').andThen((target) => {
      const p = Math.min(target.plants, 3); target.stock.deduct(Resource.PLANTS, p, {log: true, from: {player}}); player.stock.add(Resource.PLANTS, p, {log: true});
      const s = Math.min(target.steel, 1); target.stock.deduct(Resource.STEEL, s, {log: true, from: {player}}); player.stock.add(Resource.STEEL, s, {log: true});
      return undefined;});
  }
}
