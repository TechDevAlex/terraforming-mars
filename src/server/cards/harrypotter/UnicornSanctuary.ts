import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {IActionCard} from '../ICard';

export class UnicornSanctuary extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.UNICORN_SANCTUARY, tags: [Tag.ANIMAL], cost: 12,
      resourceType: CardResource.ANIMAL,
      victoryPoints: 'special',
      requirements: {temperature: 0},
      metadata: {cardNumber: 'HP205', renderData: CardRenderer.builder((b) => {
        b.action('Add 1 animal to this card.', (ab) => {ab.empty().startAction.resource(CardResource.ANIMAL);}).br;
        b.vpText('3 VP per 2 animals on this card.');
      }), description: 'Requires temperature 0°C or warmer. Cannot be played if you have any played cards worth negative VP. Action: add 1 animal. 3 VP per 2 animals on this card. (The blood of a unicorn will keep you alive — at a terrible price.)'}
    });
  }
  public override bespokeCanPlay(player: IPlayer): boolean {
    return !player.playedCards.some((c) => {
      const vp = c.victoryPoints;
      return typeof vp === 'number' && vp < 0;
    });
  }
  public canAct(): boolean {return true;}
  public action(player: IPlayer) {
    player.addResourceTo(this, {log: true});
    return undefined;
  }
  public override getVictoryPoints(): number {
    return Math.floor(this.resourceCount / 2) * 3;
  }
}
