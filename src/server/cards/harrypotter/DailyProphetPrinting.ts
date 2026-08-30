import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class DailyProphetPrinting extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.DAILY_PROPHET_PRINTING, tags: [Tag.EARTH, Tag.BUILDING], cost: 9, metadata: {cardNumber: 'HP114', renderData: CardRenderer.builder((b) => {b.action('Draw 1 card.', (ab) => {ab.empty().startAction.cards(1);});}), description: 'Action: Draw 1 card. (The wizarding newspaper prints whatever sells—truth is optional.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {player.drawCard(); return undefined;}
}
