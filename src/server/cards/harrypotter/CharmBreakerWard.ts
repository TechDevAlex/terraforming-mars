import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class CharmBreakerWard extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.CHARM_BREAKER_WARD, tags: [Tag.POWER, Tag.BUILDING], cost: 11, victoryPoints: 1, behavior: {production: {energy: 1}}, metadata: {cardNumber: 'HP192', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.energy(1));}), description: 'Increase energy production 1 step. (Ancient protective enchantments woven into the stones—the castle defends its own.)'}});}
}
