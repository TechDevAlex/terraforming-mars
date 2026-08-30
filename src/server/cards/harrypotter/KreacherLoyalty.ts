import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class KreacherLoyalty extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.KREACHER_LOYALTY, tags: [Tag.BUILDING], cost: 3, behavior: {production: {steel: 1}}, metadata: {cardNumber: 'HP108', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.steel(1));}), description: 'Increase steel production 1 step. (Master gave Kreacher an order, and Kreacher obeys—finally, willingly.)'}});}
}
