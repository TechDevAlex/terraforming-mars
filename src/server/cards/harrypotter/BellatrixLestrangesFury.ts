import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
export class BellatrixLestrangesFury extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.BELLATRIX_LESTRANGES_FURY, tags: [Tag.POWER, Tag.SPACE], cost: 8,
      metadata: {cardNumber: 'HP42', renderData: CardRenderer.builder((b) => {b.minus().plants(2).steel(1).asterix();}),
        description: 'Each opponent loses 2 plants and 1 steel. (She cackled with delight as the world burned around her.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      opp.stock.deduct(Resource.PLANTS, Math.min(opp.plants, 2), {log: true, from: {player}});
      opp.stock.deduct(Resource.STEEL, Math.min(opp.steel, 1), {log: true, from: {player}});
    }
    return undefined;
  }
}
