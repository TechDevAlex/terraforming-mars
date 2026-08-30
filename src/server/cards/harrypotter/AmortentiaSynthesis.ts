import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class AmortentiaSynthesis extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.AMORTENTIA_SYNTHESIS, tags: [Tag.SCIENCE, Tag.MICROBE], cost: 10, behavior: {production: {megacredits: 2}}, metadata: {cardNumber: 'HP149', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(2));}), description: 'Increase M€ production 2 steps. (The most powerful love potion in existence—it smells different to everyone.)'}});}
}
