import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {Resource} from '../../../common/Resource';import {CardRenderer} from '../render/CardRenderer';
export class BorginBurkesImports extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.BORGIN_BURKES_IMPORTS, tags: [Tag.BUILDING], cost: 12, metadata: {cardNumber: 'HP140', renderData: CardRenderer.builder((b) => {b.action('Spend 3 M€ to gain 7 M€. -1 VP per use.', (ab) => {ab.megacredits(3).startAction.megacredits(7);});}), description: 'Action: Spend 3 M€ to gain 7 M€ (net +4). Lose 1 VP. (The dark artifacts shop deals in cursed objects, no questions asked.)'}});}
  public canAct(player: Player): boolean {return player.canAfford(3);}
  private vpLost = 0;
  public action(player: Player) {player.megaCredits -= 3; player.stock.add(Resource.MEGACREDITS, 7, {log: true}); this.vpLost++; return undefined;}
  public override getVictoryPoints(): number {return -this.vpLost;}
}
