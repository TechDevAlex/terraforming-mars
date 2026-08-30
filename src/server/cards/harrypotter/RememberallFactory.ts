import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class RememberallFactory extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.REMEMBRALL_FACTORY, tags: [Tag.SCIENCE, Tag.BUILDING], cost: 5, behavior: {production: {megacredits: 1}}, metadata: {cardNumber: 'HP197', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(1));}), description: 'Increase M€ production 1 step. (The smoke turns red when you\'ve forgotten something—the trouble is remembering what.)'}});}
}
