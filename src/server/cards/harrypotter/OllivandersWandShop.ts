import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class OllivandersWandShop extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.OLLIVANDERS_WAND_SHOP, tags: [Tag.BUILDING, Tag.SCIENCE], cost: 16, victoryPoints: 1, metadata: {cardNumber: 'HP106', renderData: CardRenderer.builder((b) => {b.action('Spend 2 M€ to draw a card.', (ab) => {ab.megacredits(2).startAction.cards(1);});}), description: 'Action: Spend 2 M€ to draw a card. (The wand chooses the wizard, Mr. Potter—every wand sold since 382 BC.)'}});}
  public canAct(player: Player): boolean {return player.canAfford(2);}
  public action(player: Player) {player.megaCredits -= 2; player.drawCard(); return undefined;}
}
