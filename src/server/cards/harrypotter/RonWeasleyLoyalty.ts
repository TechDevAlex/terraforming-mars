import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class RonWeasleyLoyalty extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.RON_WEASLEY_LOYALTY, tags: [Tag.EARTH], cost: 9, victoryPoints: 1, behavior: {tr: 1, stock: {megacredits: 3}}, metadata: {cardNumber: 'HP117', renderData: CardRenderer.builder((b) => {b.tr(1).megacredits(3);}), description: 'Raise TR 1 step. Gain 3 M€. (He came back—through cold and doubt and the weight of the locket, Ron came back.)'}});}
}
