import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class HermioneGrangerTimeTurner extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.HERMIONE_GRANGER_TIME_TURNER, tags: [Tag.SCIENCE, Tag.SPACE], cost: 21, victoryPoints: 2, metadata: {cardNumber: 'HP91', renderData: CardRenderer.builder((b) => {b.action('Draw 2 cards.', (ab) => {ab.empty().startAction.cards(2);});}), description: 'Action: Draw 2 cards. (All those extra classes—Hermione bent time itself in pursuit of knowledge.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {player.drawCard(2); return undefined;}
}
