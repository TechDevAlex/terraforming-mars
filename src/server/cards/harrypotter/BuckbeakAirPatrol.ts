import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardResource} from '../../../common/CardResource';import {CardRenderer} from '../render/CardRenderer';
export class BuckbeakAirPatrol extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.BUCKBEAK_AIR_PATROL, tags: [Tag.ANIMAL, Tag.SPACE], cost: 12, resourceType: CardResource.ANIMAL, victoryPoints: {resourcesHere: {}, per: 2}, metadata: {cardNumber: 'HP160', renderData: CardRenderer.builder((b) => {b.action('Add 1 animal.', (ab) => {ab.empty().startAction.resource(CardResource.ANIMAL);});b.br.vpText('1 VP per 2 animals.');}), description: 'Action: Add 1 animal. 1 VP per 2 animals. (Always bow first—and never insult a hippogriff, or it\'s the last thing you\'ll do.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {player.addResourceTo(this, {log: true}); return undefined;}
}
