import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {Resource} from '../../../common/Resource';import {CardRenderer} from '../render/CardRenderer';
export class PomonaSproutsSeedbed extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.POMONA_SPROUTS_SEEDBED, tags: [Tag.PLANT], cost: 10, metadata: {cardNumber: 'HP61', renderData: CardRenderer.builder((b) => {b.action('Gain 1 plant, or spend 3 plants to place a greenery.', (ab) => {ab.empty().startAction.plants(1);});}), description: 'Action: Gain 1 plant. (Professor Sprout hummed as she tended seedlings that would one day be mighty.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {player.stock.add(Resource.PLANTS, 1, {log: true}); return undefined;}
}
