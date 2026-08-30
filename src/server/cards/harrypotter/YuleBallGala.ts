import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class YuleBallGala extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.YULE_BALL_GALA, tags: [Tag.EARTH], cost: 8, behavior: {tr: 1, stock: {megacredits: 4}}, metadata: {cardNumber: 'HP184', renderData: CardRenderer.builder((b) => {b.tr(1).megacredits(4);}), description: 'Raise TR 1 step. Gain 4 M€. (The Great Hall was transformed—ice sculptures, fairies, and an orchestra of armor.)'}});}
}
