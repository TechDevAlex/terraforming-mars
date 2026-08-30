import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {SelectPlayer} from '../../inputs/SelectPlayer';
export class BellatrixLestrangesFury extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.BELLATRIX_LESTRANGES_FURY, tags: [Tag.POWER], cost: 12,
      metadata: {cardNumber: 'HP33', renderData: CardRenderer.builder((b) => {b.minus().plants(4).asterix().steel(2).asterix();}),
        description: 'Select a player. They lose 4 plants and 2 steel. (She cackled with delight as the world burned around her.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    return new SelectPlayer(player.opponents, 'Select target for Bellatrix').andThen((target) => {
      target.stock.deduct(Resource.PLANTS, Math.min(target.plants, 4), {log: true, from: {player}});
      target.stock.deduct(Resource.STEEL, Math.min(target.steel, 2), {log: true, from: {player}});
      return undefined;
    });
  }
}
