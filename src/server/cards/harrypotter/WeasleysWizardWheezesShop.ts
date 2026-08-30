import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {Resource} from '../../../common/Resource';import {CardRenderer} from '../render/CardRenderer';
export class WeasleysWizardWheezesShop extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.WEASLEYS_WIZARD_WHEEZES_SHOP, tags: [Tag.BUILDING, Tag.EARTH], cost: 15, victoryPoints: 2, metadata: {cardNumber: 'HP89', renderData: CardRenderer.builder((b) => {b.action('Spend 2 M€ to gain 5 M€.', (ab) => {ab.megacredits(2).startAction.megacredits(5);});}), description: 'Action: Spend 2 M€ to gain 5 M€. (Net +3) (Fred and George turned mischief into galleons—the joke shop thrived even in dark times.)'}});}
  public canAct(player: Player): boolean {return player.canAfford(2);}
  public action(player: Player) {player.megaCredits -= 2; player.stock.add(Resource.MEGACREDITS, 5, {log: true}); return undefined;}
}
