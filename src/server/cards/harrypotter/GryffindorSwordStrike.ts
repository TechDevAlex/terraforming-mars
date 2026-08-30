import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class GryffindorSwordStrike extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.GRYFFINDOR_SWORD_STRIKE, tags: [Tag.POWER], cost: 16, behavior: {tr: 2}, metadata: {cardNumber: 'HP83', renderData: CardRenderer.builder((b) => {b.tr(2);}), description: 'Raise TR 2 steps. (The sword of Gryffindor appears to any worthy member of the house in their hour of need.)'}});}
}
