import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';

export class ConfoundMuggleOfficials extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.CONFOUND_MUGGLE_OFFICIALS, tags: [Tag.POWER, Tag.EARTH], cost: 12, victoryPoints: -3,
      metadata: {cardNumber: 'HP215', renderData: CardRenderer.builder((b) => {
        b.text('CLAIM 1 MILESTONE (free)');
      }), description: 'Claim any unclaimed milestone (ignore requirements, no M€ cost). -3 VP. (A well-placed Confundus and the paperwork approves itself.)'}
    });
  }
  public override bespokeCanPlay(player: IPlayer): boolean {
    if (player.game.milestones.length === 0) return false;
    return player.game.milestones.some((m) => !player.game.milestoneClaimed(m));
  }
  public override bespokePlay(player: IPlayer) {
    const unclaimed = player.game.milestones.filter((m) => !player.game.milestoneClaimed(m));
    if (unclaimed.length === 0) return undefined;
    const options = unclaimed.map((m) =>
      new SelectOption(m.name, 'Claim').andThen(() => {
        player.game.claimedMilestones.push({player, milestone: m});
        player.game.log('${0} claimed ${1} milestone (via Confound Muggle Officials)', (b) => b.player(player).milestone(m));
        return undefined;
      }),
    );
    return new OrOptions(...options);
  }
}
