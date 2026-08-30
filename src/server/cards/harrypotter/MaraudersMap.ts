import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class MaraudersMap extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.MARAUDERS_MAP, tags: [Tag.SCIENCE], cost: 10, victoryPoints: 1, metadata: {cardNumber: 'HP96', renderData: CardRenderer.builder((b) => {b.action('Draw 1 card.', (ab) => {ab.empty().startAction.cards(1);});}), description: 'Action: Draw 1 card. (I solemnly swear that I am up to no good.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {player.drawCard(); return undefined;}
}
