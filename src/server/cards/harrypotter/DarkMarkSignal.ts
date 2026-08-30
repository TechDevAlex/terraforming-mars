import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {SelectPlayer} from '../../inputs/SelectPlayer';
export class DarkMarkSignal extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.DARK_MARK_SIGNAL, tags: [Tag.POWER], cost: 5, victoryPoints: -1,
      metadata: {cardNumber: 'HP50', renderData: CardRenderer.builder((b) => {b.minus().production((pb) => pb.megacredits(3)).asterix();}),
        description: 'Select a player. They lose 3 M€ production. -1 VP. (The skull and serpent hung in the sky, and all who saw it trembled.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    return new SelectPlayer(player.opponents, 'Select target for Dark Mark').andThen((target) => {
      target.production.add(Resource.MEGACREDITS, -3, {log: true}); return undefined;
    });
  }
}
