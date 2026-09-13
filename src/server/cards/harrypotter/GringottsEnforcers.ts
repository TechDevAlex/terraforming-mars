import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';

export class GringottsEnforcers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.GRINGOTTS_ENFORCERS, tags: [Tag.EARTH, Tag.BUILDING], cost: 8, victoryPoints: 1,
      metadata: {cardNumber: 'HP204', renderData: CardRenderer.builder((b) => {
        b.effect('When an opponent causes you to lose resources or production, steal 2 M€ from them.', (eb) => {
          eb.minus().megacredits(1).asterix().startEffect.megacredits(2).minus().asterix();
        });
      }), description: 'When any opponent causes you to lose resources or production, steal 2 M€ from that opponent (as much as possible). (For those who take, but do not earn, will pay most dearly in their turn.)'}
    });
  }
  public override bespokePlay(player: IPlayer) {
    player.game.gringottsEnforcersOwner = player;
    return undefined;
  }
}
