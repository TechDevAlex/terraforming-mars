import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class FawkesRebirth extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.FAWKES_REBIRTH, tags: [Tag.ANIMAL, Tag.POWER], cost: 13, behavior: {global: {temperature: 1}, tr: 1}, metadata: {cardNumber: 'HP51', renderData: CardRenderer.builder((b) => {b.temperature(1).tr(1);}), description: 'Raise temperature 1 step. Raise TR 1 step. (Fawkes—Dumbledore\'s phoenix, who burst into flame and rose again from its own ashes.)'}});}
}
