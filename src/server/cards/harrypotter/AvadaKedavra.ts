import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
export class AvadaKedavra extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.AVADA_KEDAVRA, tags: [Tag.POWER, Tag.JOVIAN], cost: 8,
      metadata: {cardNumber: 'HP23', renderData: CardRenderer.builder((b) => {b.minus().production((pb) => pb.megacredits(1)).asterix();}),
        description: 'Each opponent loses 1 M€ production. (The killing curse leaves nothing but silence in its wake.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      opp.production.add(Resource.MEGACREDITS, -1, {log: true, from: {player}});
    }
    return undefined;
  }
}
