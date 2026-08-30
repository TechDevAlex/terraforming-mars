import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class TriwizardTournament extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.TRIWIZARD_TOURNAMENT, tags: [Tag.EARTH], cost: 14, behavior: {tr: 2, drawCard: 1}, metadata: {cardNumber: 'HP78', renderData: CardRenderer.builder((b) => {b.tr(2).cards(1);}), description: 'Raise TR 2 steps. Draw a card. (Eternal glory awaits the champion—along with mortal danger at every turn.)'}});}
}
