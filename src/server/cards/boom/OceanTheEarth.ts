import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {PlaceOceanTile} from '../../deferredActions/PlaceOceanTile';

export class OceanTheEarth extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.OCEAN_THE_EARTH,
      tags: [Tag.SPACE, Tag.EARTH],
      cost: 24,
      victoryPoints: -2,

      metadata: {
        cardNumber: 'BM14',
        renderData: CardRenderer.builder((b) => {
          b.oceans(1).megacredits(6).br;
          b.minus().production((pb) => pb.megacredits(2)).asterix();
        }),
        description: 'Place an ocean. Gain 6 M€. All players lose 2 M€ production. -2 VP.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    player.game.defer(new PlaceOceanTile(player));
    player.stock.add(Resource.MEGACREDITS, 6, {log: true});
    for (const p of player.game.players) {
      p.production.add(Resource.MEGACREDITS, -2, {log: true});
    }
    return undefined;
  }
}
