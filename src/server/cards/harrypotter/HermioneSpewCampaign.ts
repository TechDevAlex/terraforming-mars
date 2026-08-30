import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class HermioneSpewCampaign extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.HERMIONE_SPEW_CAMPAIGN, tags: [Tag.EARTH], cost: 6, victoryPoints: 1, behavior: {tr: 1}, metadata: {cardNumber: 'HP141', renderData: CardRenderer.builder((b) => {b.tr(1);}), description: 'Raise TR 1 step. (The Society for the Promotion of Elfish Welfare—mockery couldn\'t stop her conviction.)'}});}
}
