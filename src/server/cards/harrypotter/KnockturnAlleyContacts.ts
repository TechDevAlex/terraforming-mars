import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {Resource} from '../../../common/Resource';import {CardRenderer} from '../render/CardRenderer';
export class KnockturnAlleyContacts extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.KNOCKTURN_ALLEY_CONTACTS, tags: [Tag.EARTH, Tag.BUILDING], cost: 14, victoryPoints: -1, metadata: {cardNumber: 'HP152', renderData: CardRenderer.builder((b) => {b.action('Spend 3 M€ to gain 7 M€.', (ab) => {ab.megacredits(3).startAction.megacredits(7);});}), description: 'Action: Spend 3 M€ to gain 7 M€ (net +4). -1 VP. (The shadowy alley trades in things best left unmentioned.)'}});}
  public canAct(player: Player): boolean {return player.canAfford(3);}
  public action(player: Player) {player.megaCredits -= 3; player.stock.add(Resource.MEGACREDITS, 7, {log: true}); return undefined;}
}
