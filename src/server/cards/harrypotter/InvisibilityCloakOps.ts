import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {Resource} from '../../../common/Resource';import {CardRenderer} from '../render/CardRenderer';import {SelectPlayer} from '../../inputs/SelectPlayer';
export class InvisibilityCloakOps extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.INVISIBILITY_CLOAK_OPS, tags: [Tag.POWER, Tag.EARTH], cost: 16, victoryPoints: 1, metadata: {cardNumber: 'HP125', renderData: CardRenderer.builder((b) => {b.action('Steal 2 M€ from an opponent.', (ab) => {ab.empty().startAction.text('STEAL 2').megacredits(1);});}), description: 'Action: Steal 2 M€ from an opponent. (One of the three Deathly Hallows—death\'s own cloak, passed down through generations.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {
    return new SelectPlayer(player.opponents, 'Select target').andThen((target) => {
      const amt = Math.min(target.megaCredits, 2); target.stock.deduct(Resource.MEGACREDITS, amt, {log: true, from: {player}}); player.stock.add(Resource.MEGACREDITS, amt, {log: true});
      return undefined;});
  }
}
