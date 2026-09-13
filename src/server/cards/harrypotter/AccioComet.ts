import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';

export class AccioComet extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.ACCIO_COMET, tags: [Tag.SPACE], cost: 12,
      behavior: {global: {temperature: 2}},
      metadata: {cardNumber: 'HP220', renderData: CardRenderer.builder((b) => {
        b.temperature(2).br.minus().plants(-1).asterix();
      }), description: 'Raise temperature 2 steps. Lose all your plants. (The Summoning Charm brings things to you. Sometimes that has downsides.)'}
    });
  }
  public override bespokePlay(player: IPlayer) {
    if (player.plants > 0) {
      player.stock.deduct(Resource.PLANTS, player.plants, {log: true});
    }
    return undefined;
  }
}
