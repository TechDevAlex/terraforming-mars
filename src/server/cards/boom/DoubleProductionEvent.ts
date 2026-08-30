import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';

export class DoubleProductionEvent extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.DOUBLE_PRODUCTION,
      tags: [Tag.EARTH],
      cost: 20,
      victoryPoints: 2,

      metadata: {
        cardNumber: 'BM07',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.text('x2')).asterix();
        }),
        description: 'All players gain resources equal to their current production. 2 VP.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    for (const p of player.game.players) {
      p.stock.add(Resource.MEGACREDITS, p.production.megacredits, {log: true});
      p.stock.add(Resource.STEEL, p.production.steel, {log: true});
      p.stock.add(Resource.TITANIUM, p.production.titanium, {log: true});
      p.stock.add(Resource.PLANTS, p.production.plants, {log: true});
      p.stock.add(Resource.ENERGY, p.production.energy, {log: true});
      p.stock.add(Resource.HEAT, p.production.heat, {log: true});
    }
    return undefined;
  }
}
