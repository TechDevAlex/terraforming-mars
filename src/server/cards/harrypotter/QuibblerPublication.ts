import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class QuibblerPublication extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.QUIBBLER_PUBLICATION, tags: [Tag.EARTH], cost: 5, metadata: {cardNumber: 'HP156', renderData: CardRenderer.builder((b) => {b.action('Draw 1 card. Each opponent draws 1 card.', (ab) => {ab.empty().startAction.cards(1).asterix();});}), description: 'Action: Draw 1 card. Each opponent also draws 1 card. (Xeno Lovegood\'s magazine—occasionally right, always entertaining, never mainstream.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {player.drawCard(); for (const opp of player.opponents) opp.drawCard(); return undefined;}
}
