import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class DarkArtsResearch extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.DARK_ARTS_RESEARCH, tags: [Tag.SCIENCE, Tag.POWER], cost: 18, victoryPoints: -1, metadata: {cardNumber: 'HP185', renderData: CardRenderer.builder((b) => {b.action('Draw 2 cards.', (ab) => {ab.empty().startAction.cards(2);});}), description: 'Action: Draw 2 cards. -1 VP. (The restricted section holds knowledge that corrodes the soul of anyone who seeks it.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {player.drawCard(2); return undefined;}
}
