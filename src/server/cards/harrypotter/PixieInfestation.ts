import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
export class PixieInfestation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.PIXIE_INFESTATION, tags: [Tag.MICROBE], cost: 4,
      behavior: {drawCard: 1},
      metadata: {cardNumber: 'HP68', renderData: CardRenderer.builder((b) => {b.minus().steel(1).asterix().cards(1);}),
        description: 'Each opponent loses 1 steel. Draw 1 card. (Cornish pixies—deceptively small, astonishingly destructive.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      opp.stock.deduct(Resource.STEEL, Math.min(opp.steel, 1), {log: true, from: {player}});
    }
    return undefined;
  }
}
