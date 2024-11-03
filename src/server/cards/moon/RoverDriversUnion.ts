import {CardName} from '../../../common/cards/CardName';
import {IPlayer} from '../../IPlayer';
import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {MoonExpansion} from '../../moon/MoonExpansion';
import {Resource} from '../../../common/Resource';
import {Card} from '../Card';

export class RoverDriversUnion extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.ROVER_DRIVERS_UNION,
      type: CardType.AUTOMATED,
      tags: [Tag.MOON],
      cost: 16,
      requirements: {logisticRate: 2},

      behavior: {
        moon: {roadTile: {}},
      },

      metadata: {
        description: 'Requires 2 logistic rate. Place a road. Increase your M€ production 1 step per logistic rate.',
        cardNumber: 'M78',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1)).slash().moonLogisticsRate().br;
          b.moonRoad;
        }),
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    MoonExpansion.ifMoon(player.game, (moonData) => {
      player.production.add(Resource.MEGACREDITS, moonData.logisticRate, {log: true});
    });
    return undefined;
  }
}
