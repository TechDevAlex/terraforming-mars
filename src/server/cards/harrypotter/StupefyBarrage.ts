import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';import {IPlayer} from '../../IPlayer';import {Resource} from '../../../common/Resource';import {SelectPlayer} from '../../inputs/SelectPlayer';
export class StupefyBarrage extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.STUPEFY_BARRAGE, tags: [Tag.POWER], cost: 7, metadata: {cardNumber: 'HP54', renderData: CardRenderer.builder((b) => {b.minus().energy(3).asterix().heat(2).asterix();}), description: 'Select a player. They lose 3 energy and 2 heat. (Red jets of light filled the corridor as the defenders held their ground.)'}});}
  public override bespokePlay(player: IPlayer) {
    return new SelectPlayer(player.opponents, 'Select target for Stupefy').andThen((target) => {
      target.stock.deduct(Resource.ENERGY, Math.min(target.energy, 3), {log: true, from: {player}});
      target.stock.deduct(Resource.HEAT, Math.min(target.heat, 2), {log: true, from: {player}});
      return undefined;});
  }
}
