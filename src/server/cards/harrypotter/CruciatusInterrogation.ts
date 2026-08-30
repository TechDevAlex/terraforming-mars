import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';import {IPlayer} from '../../IPlayer';import {Resource} from '../../../common/Resource';import {SelectPlayer} from '../../inputs/SelectPlayer';
export class CruciatusInterrogation extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.CRUCIATUS_INTERROGATION, tags: [Tag.POWER], cost: 9, metadata: {cardNumber: 'HP75', renderData: CardRenderer.builder((b) => {b.minus().megacredits(4).asterix();}), description: 'Select a player. They lose 4 M€. (The Cruciatus Curse—pain beyond imagining, the favorite tool of the merciless.)'}});}
  public override bespokePlay(player: IPlayer) {
    return new SelectPlayer(player.opponents, 'Select target for Cruciatus').andThen((target) => {
      target.stock.deduct(Resource.MEGACREDITS, Math.min(target.megaCredits, 4), {log: true, from: {player}}); return undefined;});
  }
}
