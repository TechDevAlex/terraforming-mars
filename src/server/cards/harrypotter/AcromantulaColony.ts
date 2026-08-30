import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardResource} from '../../../common/CardResource';import {Resource} from '../../../common/Resource';import {CardRenderer} from '../render/CardRenderer';
export class AcromantulaColony extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.ACROMANTULA_COLONY, tags: [Tag.MICROBE, Tag.ANIMAL], cost: 13, resourceType: CardResource.MICROBE, victoryPoints: {resourcesHere: {}, per: 3}, metadata: {cardNumber: 'HP56', renderData: CardRenderer.builder((b) => {b.action('Add 1 microbe. Remove 3 to gain 4 M€.', (ab) => {ab.empty().startAction.resource(CardResource.MICROBE);});b.br.vpText('1 VP per 3 microbes.');}), description: 'Action: Add 1 microbe. Remove 3 microbes to gain 4 M€. 1 VP per 3 microbes. (Aragog\'s children filled the Forbidden Forest, clicking and hungry.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {
    if (this.resourceCount >= 3) {this.resourceCount -= 3; player.stock.add(Resource.MEGACREDITS, 4, {log: true});} else {player.addResourceTo(this, {log: true});}
    return undefined;}
}
