import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';import {IPlayer} from '../../IPlayer';import {Resource} from '../../../common/Resource';import {SelectPlayer} from '../../inputs/SelectPlayer';
export class PixieInfestation extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.PIXIE_INFESTATION, tags: [Tag.MICROBE], cost: 4, behavior: {drawCard: 1}, metadata: {cardNumber: 'HP68', renderData: CardRenderer.builder((b) => {b.minus().steel(2).asterix().cards(1);}), description: 'Select a player. They lose 2 steel. Draw 1 card. (Cornish pixies—deceptively small, astonishingly destructive.)'}});}
  public override bespokePlay(player: IPlayer) {
    if (player.opponents.length > 0) {
      return new SelectPlayer(player.opponents, 'Select target for Pixie Infestation').andThen((target) => {
        target.stock.deduct(Resource.STEEL, Math.min(target.steel, 2), {log: true, from: {player}}); return undefined;});
    }
    return undefined;
  }
}
