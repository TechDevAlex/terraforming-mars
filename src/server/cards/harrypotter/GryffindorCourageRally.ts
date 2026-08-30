import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class GryffindorCourageRally extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.GRYFFINDOR_COURAGE_RALLY, tags: [Tag.POWER], cost: 12, behavior: {tr: 2, stock: {energy: 3}}, metadata: {cardNumber: 'HP134', renderData: CardRenderer.builder((b) => {b.tr(2).energy(3);}), description: 'Raise TR 2 steps. Gain 3 energy. (Where dwell the brave at heart, their daring, nerve, and chivalry set Gryffindors apart.)'}});}
}
