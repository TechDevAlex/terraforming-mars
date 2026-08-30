import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardResource} from '../../../common/CardResource';import {CardRenderer} from '../render/CardRenderer';
export class VenomousTentaculaFarm extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.VENOMOUS_TENTACULA_FARM, tags: [Tag.PLANT, Tag.MICROBE], cost: 11, resourceType: CardResource.MICROBE, metadata: {cardNumber: 'HP175', renderData: CardRenderer.builder((b) => {b.action('Add 1 microbe. Remove 3 to gain 1 TR.', (ab) => {ab.empty().startAction.resource(CardResource.MICROBE);});}), description: 'Action: Add 1 microbe. Remove 3 microbes to gain 1 TR. (The plant reaches for students with spiked vines—Professor Sprout handles it barehanded.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {
    if (this.resourceCount >= 3) {this.resourceCount -= 3; player.increaseTerraformRating(); player.game.log('${0} gained 1 TR from Venomous Tentacula', (b) => b.player(player));} else {player.addResourceTo(this, {log: true});}
    return undefined;}
}
