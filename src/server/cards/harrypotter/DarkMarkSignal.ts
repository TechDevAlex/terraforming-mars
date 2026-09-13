import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
export class DarkMarkSignal extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.DARK_MARK_SIGNAL, tags: [Tag.POWER, Tag.SPACE], cost: 3, victoryPoints: -1,
      metadata: {cardNumber: 'HP24', renderData: CardRenderer.builder((b) => {b.minus().production((pb) => pb.megacredits(1)).asterix();}),
        description: 'Each opponent loses 1 M€ production. -1 VP. (The skull and serpent hung in the sky, and all who saw it trembled.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      opp.production.add(Resource.MEGACREDITS, -1, {log: true, from: {player}});
    }
    return undefined;
  }
}
