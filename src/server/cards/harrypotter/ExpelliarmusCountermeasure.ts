import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';import {IPlayer} from '../../IPlayer';import {Resource} from '../../../common/Resource';import {SelectPlayer} from '../../inputs/SelectPlayer';
export class ExpelliarmusCountermeasure extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.EXPELLIARMUS_COUNTERMEASURE, tags: [Tag.POWER], cost: 4, metadata: {cardNumber: 'HP115', renderData: CardRenderer.builder((b) => {b.minus().production((pb) => pb.energy(2)).asterix();}), description: 'Select a player. They lose 2 energy production. (Harry\'s signature spell—simple, elegant, disarming.)'}});}
  public override bespokePlay(player: IPlayer) {
    return new SelectPlayer(player.opponents, 'Select target for Expelliarmus').andThen((target) => {
      target.production.add(Resource.ENERGY, -2, {log: true}); return undefined;});
  }
}
