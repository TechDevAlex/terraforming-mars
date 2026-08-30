import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {Resource} from '../../../common/Resource';import {CardRenderer} from '../render/CardRenderer';
export class ChocolateFrogFactory extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.CHOCOLATE_FROG_FACTORY, tags: [Tag.BUILDING, Tag.EARTH], cost: 8, metadata: {cardNumber: 'HP174', renderData: CardRenderer.builder((b) => {b.action('Spend 1 M€ to gain 3 M€.', (ab) => {ab.megacredits(1).startAction.megacredits(3);});}), description: 'Action: Spend 1 M€ to gain 3 M€ (net +2). (Every frog comes with a collectible card—Dumbledore is the most common.)'}});}
  public canAct(player: Player): boolean {return player.canAfford(1);}
  public action(player: Player) {player.megaCredits -= 1; player.stock.add(Resource.MEGACREDITS, 3, {log: true}); return undefined;}
}
