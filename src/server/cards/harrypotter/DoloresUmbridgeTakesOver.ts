import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';

export class DoloresUmbridgeTakesOver extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.DOLORES_UMBRIDGE_TAKES_OVER, tags: [Tag.EARTH, Tag.POWER], cost: 8, victoryPoints: -1,
      behavior: {production: {megacredits: 1}},
      metadata: {cardNumber: 'HP221', renderData: CardRenderer.builder((b) => {
        b.production((pb) => pb.megacredits(1)).br;
        b.minus().megacredits(1).slash().tag(Tag.SCIENCE).asterix();
      }), description: 'Increase M€ production 1 step. Each opponent loses 1 M€ per science tag they have. -1 VP. (I must not tell lies. The ministry knows best.)'}
    });
  }
  public override bespokePlay(player: IPlayer) {
    for (const opp of player.opponents) {
      const sci = opp.tags.count(Tag.SCIENCE, 'raw');
      if (sci > 0) opp.stock.deduct(Resource.MEGACREDITS, Math.min(opp.megaCredits, sci), {log: true, from: {player}});
    }
    return undefined;
  }
}
