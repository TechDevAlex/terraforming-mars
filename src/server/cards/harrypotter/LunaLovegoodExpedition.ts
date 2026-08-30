import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class LunaLovegoodExpedition extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.LUNA_LOVEGOOD_EXPEDITION, tags: [Tag.SCIENCE, Tag.SPACE], cost: 11, victoryPoints: 1, metadata: {cardNumber: 'HP143', renderData: CardRenderer.builder((b) => {b.action('Draw 1 card.', (ab) => {ab.empty().startAction.cards(1);});}), description: 'Action: Draw 1 card. (Nargles infest mistletoe, you know—most people just can\'t see them.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {player.drawCard(); return undefined;}
}
