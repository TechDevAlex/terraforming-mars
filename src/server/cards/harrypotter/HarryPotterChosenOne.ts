import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class HarryPotterChosenOne extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.HARRY_POTTER_CHOSEN_ONE, tags: [Tag.POWER, Tag.EARTH], cost: 20, victoryPoints: 3, behavior: {tr: 2, drawCard: 1}, metadata: {cardNumber: 'HP103', renderData: CardRenderer.builder((b) => {b.tr(2).cards(1);}), description: 'Raise TR 2 steps. Draw a card. (The boy who lived—marked by Voldemort as his equal, destined to end it all.)'}});}
}
