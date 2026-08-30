import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {SelectPlayer} from '../../inputs/SelectPlayer';
export class AvadaKedavra extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.AVADA_KEDAVRA, tags: [Tag.POWER], cost: 20,
      metadata: {cardNumber: 'HP23', renderData: CardRenderer.builder((b) => {b.minus().production((pb) => pb.megacredits(4)).asterix();}),
        description: 'Select a player. That player loses 4 M€ production. (The killing curse leaves nothing but silence in its wake.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    return new SelectPlayer(player.opponents, 'Select player for Avada Kedavra').andThen((target) => {
      target.production.add(Resource.MEGACREDITS, -4, {log: true}); return undefined;
    });
  }
}
