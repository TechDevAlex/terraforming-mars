import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class DoxySExtermination extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.DOXY_EXTERMINATION, tags: [Tag.MICROBE], cost: 3, behavior: {stock: {megacredits: 3}, drawCard: 1}, metadata: {cardNumber: 'HP171', renderData: CardRenderer.builder((b) => {b.megacredits(3).cards(1);}), description: 'Gain 3 M€. Draw a card. (Venomous fairy-like pests—Mrs. Weasley sprayed them with black Doxycide.)'}});}
}
