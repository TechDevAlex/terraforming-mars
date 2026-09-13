import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
export class ImperioDomination extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.IMPERIO_DOMINATION, tags: [Tag.POWER], cost: 6, victoryPoints: -1,
      metadata: {cardNumber: 'HP59', renderData: CardRenderer.builder((b) => {b.text('STEAL 3').megacredits(1).steel(1).asterix();}),
        description: 'Steal 3 M€ and 1 steel from each opponent. -1 VP. (The Imperius Curse bends the will completely—the victim smiles while obeying.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      const mc = Math.min(opp.megaCredits, 3);
      opp.stock.deduct(Resource.MEGACREDITS, mc, {log: true, from: {player}});
      player.stock.add(Resource.MEGACREDITS, mc, {log: true});
      const st = Math.min(opp.steel, 1);
      opp.stock.deduct(Resource.STEEL, st, {log: true, from: {player}});
      player.stock.add(Resource.STEEL, st, {log: true});
    }
    return undefined;
  }
}
