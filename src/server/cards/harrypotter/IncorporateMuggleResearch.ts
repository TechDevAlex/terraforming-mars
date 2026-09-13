import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {IActionCard} from '../ICard';
import {MarsUniversity} from '../base/MarsUniversity';
import {OlympusConference} from '../base/OlympusConference';

export class IncorporateMuggleResearch extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.INCORPORATE_MUGGLE_RESEARCH, tags: [Tag.EARTH], cost: 8, victoryPoints: 1,
      resourceType: CardResource.SCIENCE,
      metadata: {cardNumber: 'HP212', renderData: CardRenderer.builder((b) => {
        b.action('Add 1 science resource here. Each science resource here counts as a Science tag.', (ab) => {ab.empty().startAction.resource(CardResource.SCIENCE);}).br;
        b.text('Science resources count as Science tags.');
      }), description: 'Action: add 1 science resource here. Each science resource here counts as a Science tag. (The muggles have developed AI that lets us access all their knowledge without having to actually work with them.)'}
    });
  }
  public canAct(): boolean {return true;}
  public action(player: IPlayer) {
    player.addResourceTo(this, {log: true});
    player.tags.extraScienceTags += 1;
    // Trigger other cards' onScienceTagAdded callbacks so effects like Olympus Conference / Mars University fire
    for (const c of player.tableau) {
      if (c.name === CardName.MARS_UNIVERSITY) {
        (c as MarsUniversity).onScienceTagAdded?.(player, 1);
      } else if (c.name === CardName.OLYMPUS_CONFERENCE) {
        (c as OlympusConference).onScienceTagAdded?.(player, 1);
      }
    }
    return undefined;
  }
}
