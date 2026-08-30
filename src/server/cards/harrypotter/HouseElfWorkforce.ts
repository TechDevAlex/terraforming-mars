import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class HouseElfWorkforce extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.HOUSE_ELF_WORKFORCE, tags: [Tag.BUILDING], cost: 6, behavior: {production: {steel: 2}}, metadata: {cardNumber: 'HP58', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.steel(2));}), description: 'Increase steel production 2 steps. (They work tirelessly in the kitchens and corridors, bound by ancient magic.)'}});}
}
