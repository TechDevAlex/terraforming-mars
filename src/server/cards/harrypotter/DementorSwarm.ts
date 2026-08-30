import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
export class DementorSwarm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.DEMENTOR_SWARM, tags: [], cost: 15,
      metadata: {cardNumber: 'HP30', renderData: CardRenderer.builder((b) => {b.minus().megacredits(3).asterix().energy(2).asterix();}),
        description: 'All opponents lose 3 M€ and 2 energy. Lose 1 TR. (The temperature drops and every happy memory drains away like water through a sieve.)'},
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      opp.stock.deduct(Resource.MEGACREDITS, Math.min(opp.megaCredits, 3), {log: true, from: {player}});
      opp.stock.deduct(Resource.ENERGY, Math.min(opp.energy, 2), {log: true, from: {player}});
    }
    player.decreaseTerraformRating();
    return undefined;
  }
}
