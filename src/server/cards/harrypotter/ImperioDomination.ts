import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';import {IPlayer} from '../../IPlayer';import {Resource} from '../../../common/Resource';import {SelectPlayer} from '../../inputs/SelectPlayer';
export class ImperioDomination extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.IMPERIO_DOMINATION, tags: [Tag.POWER], cost: 18, victoryPoints: -2, metadata: {cardNumber: 'HP59', renderData: CardRenderer.builder((b) => {b.text('STEAL 5').megacredits(5).text('3').steel(1);}), description: 'Steal 5 M€ and 3 steel from an opponent. -2 VP. (The Imperius Curse bends the will completely—the victim smiles while obeying.)'}});}
  public override bespokePlay(player: IPlayer) {
    return new SelectPlayer(player.opponents, 'Select target for Imperio').andThen((target) => {
      const mc = Math.min(target.megaCredits, 5); target.stock.deduct(Resource.MEGACREDITS, mc, {log: true, from: {player}}); player.stock.add(Resource.MEGACREDITS, mc, {log: true});
      const st = Math.min(target.steel, 3); target.stock.deduct(Resource.STEEL, st, {log: true, from: {player}}); player.stock.add(Resource.STEEL, st, {log: true});
      return undefined;});
  }
}
