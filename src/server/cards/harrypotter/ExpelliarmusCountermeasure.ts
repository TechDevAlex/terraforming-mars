import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
export class ExpelliarmusCountermeasure extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.EXPELLIARMUS_COUNTERMEASURE, tags: [Tag.POWER], cost: 5,
      metadata: {cardNumber: 'HP61', renderData: CardRenderer.builder((b) => {b.minus().production((pb) => pb.energy(1)).asterix();}),
        description: 'Each opponent loses 1 energy production. (Harry\'s signature spell—simple, elegant, and always disarming.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      opp.production.add(Resource.ENERGY, -1, {log: true, from: {player}});
    }
    return undefined;
  }
}
