import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class MollyWeasleyProtection extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.MOLLY_WEASLEY_PROTECTION, tags: [Tag.POWER], cost: 10, behavior: {tr: 1, stock: {megacredits: 3}}, metadata: {cardNumber: 'HP145', renderData: CardRenderer.builder((b) => {b.tr(1).megacredits(3);}), description: 'Raise TR 1 step. Gain 3 M€. (NOT MY DAUGHTER, YOU—and Bellatrix Lestrange fell.)'}});}
}
