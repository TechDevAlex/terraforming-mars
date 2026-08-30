import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class OwlPostNetwork extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.OWL_POST_NETWORK, tags: [Tag.ANIMAL, Tag.SPACE], cost: 10, victoryPoints: 1, metadata: {cardNumber: 'HP187', renderData: CardRenderer.builder((b) => {b.action('Spend 1 M€ to draw a card.', (ab) => {ab.megacredits(1).startAction.cards(1);});}), description: 'Action: Spend 1 M€ to draw a card. (Hedwig soared through the night sky, letter clutched in her talons.)'}});}
  public canAct(player: Player): boolean {return player.canAfford(1);}
  public action(player: Player) {player.megaCredits -= 1; player.drawCard(); return undefined;}
}
