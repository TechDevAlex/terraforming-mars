import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';import {IPlayer} from '../../IPlayer';import {Resource} from '../../../common/Resource';import {SelectPlayer} from '../../inputs/SelectPlayer';
export class SectumsempraWound extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.SECTUMSEMPRA_WOUND, tags: [Tag.POWER], cost: 8, metadata: {cardNumber: 'HP123', renderData: CardRenderer.builder((b) => {b.minus().production((pb) => pb.plants(2)).asterix().plants(2).asterix();}), description: 'Select a player. They lose 2 plant production and 2 plants. (The Half-Blood Prince\'s spell—for enemies, written in the margin like a casual note.)'}});}
  public override bespokePlay(player: IPlayer) {
    return new SelectPlayer(player.opponents, 'Select target for Sectumsempra').andThen((target) => {
      target.production.add(Resource.PLANTS, -2, {log: true});
      target.stock.deduct(Resource.PLANTS, Math.min(target.plants, 2), {log: true, from: {player}});
      return undefined;});
  }
}
