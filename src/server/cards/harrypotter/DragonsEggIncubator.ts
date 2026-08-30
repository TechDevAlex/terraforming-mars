import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardResource} from '../../../common/CardResource';import {CardRenderer} from '../render/CardRenderer';
export class DragonsEggIncubator extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.DRAGONS_EGG_INCUBATOR, tags: [Tag.ANIMAL, Tag.POWER, Tag.SCIENCE], cost: 18, resourceType: CardResource.ANIMAL, metadata: {cardNumber: 'HP70', renderData: CardRenderer.builder((b) => {b.action('Add 1 animal. Remove 4 animals to gain 3 TR.', (ab) => {ab.empty().startAction.resource(CardResource.ANIMAL);});}), description: 'Action: Add 1 animal. Remove 4 animals to gain 3 TR. (Norwegian Ridgeback, Hungarian Horntail—each egg must be kept in open flame.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {
    if (this.resourceCount >= 4) {this.resourceCount -= 4; player.increaseTerraformRating(3); player.game.log('${0} hatched a dragon and gained 3 TR', (b) => b.player(player));} else {player.addResourceTo(this, {log: true});}
    return undefined;}
}
