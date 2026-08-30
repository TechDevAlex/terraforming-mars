import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class DivinationScrying extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.DIVINATION_SCRYING, tags: [Tag.SCIENCE, Tag.SPACE], cost: 8, metadata: {cardNumber: 'HP74', renderData: CardRenderer.builder((b) => {b.action('Draw 1 card.', (ab) => {ab.empty().startAction.cards(1);});}), description: 'Action: Draw 1 card. (Professor Trelawney peered into the crystal ball and, for once, saw something real.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {player.drawCard(); return undefined;}
}
