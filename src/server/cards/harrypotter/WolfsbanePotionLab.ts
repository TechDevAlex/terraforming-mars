import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {IActionCard} from '../ICard';import {Player} from '../../Player';import {CardName} from '../../../common/cards/CardName';import {CardResource} from '../../../common/CardResource';import {CardRenderer} from '../render/CardRenderer';
export class WolfsbanePotionLab extends Card implements IActionCard, IProjectCard {
  constructor() {super({type: CardType.ACTIVE, name: CardName.WOLFSBANE_POTION_LAB, tags: [Tag.SCIENCE, Tag.MICROBE], cost: 14, victoryPoints: 1, resourceType: CardResource.MICROBE, metadata: {cardNumber: 'HP82', renderData: CardRenderer.builder((b) => {b.action('Add 1 microbe.', (ab) => {ab.empty().startAction.resource(CardResource.MICROBE);});b.br.vpText('1 VP per 3 microbes.');}), description: 'Action: Add 1 microbe. 1 VP per 3 microbes. (The potion lets a werewolf keep its mind during transformation—a breakthrough of compassion.)'}});}
  public canAct(): boolean {return true;}
  public action(player: Player) {player.addResourceTo(this, {log: true}); return undefined;}
  public override getVictoryPoints(): number {return Math.floor(this.resourceCount / 3);}
}
