import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';import {IPlayer} from '../../IPlayer';import {Resource} from '../../../common/Resource';import {SelectPlayer} from '../../inputs/SelectPlayer';
export class CornishPixieSwarm extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.CORNISH_PIXIE_SWARM, tags: [Tag.MICROBE], cost: 5, behavior: {drawCard: 1}, metadata: {cardNumber: 'HP196', renderData: CardRenderer.builder((b) => {b.minus().steel(3).asterix().cards(1);}), description: 'Select a player. They lose 3 steel. Draw a card. (Lockhart released them and chaos erupted—the pixies dismantled the classroom in seconds.)'}});}
  public override bespokePlay(player: IPlayer) {
    if (player.opponents.length > 0) {return new SelectPlayer(player.opponents, 'Select target for pixies').andThen((target) => {target.stock.deduct(Resource.STEEL, Math.min(target.steel, 3), {log: true, from: {player}}); return undefined;});}
    return undefined;
  }
}
