import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardResource} from '../../../common/CardResource';import {CardRenderer} from '../render/CardRenderer';
export class PygmyPuffBreeding extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.PYGMY_PUFF_BREEDING, tags: [Tag.ANIMAL, Tag.MICROBE], cost: 6, resourceType: CardResource.ANIMAL, victoryPoints: {resourcesHere: {}, per: 4}, metadata: {cardNumber: 'HP132', renderData: CardRenderer.builder((b) => {b.action('Add 1 animal.', (ab) => {ab.empty().startAction.resource(CardResource.ANIMAL);});b.br.vpText('1 VP per 4 animals.');}), description: 'Action: Add 1 animal. 1 VP per 4 animals. (Miniature puffskeins in shades of pink and purple—Ginny bought one immediately.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {player.addResourceTo(this, {log: true}); return undefined;}
}
