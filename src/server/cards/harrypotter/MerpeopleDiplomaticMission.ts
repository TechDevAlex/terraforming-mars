import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class MerpeopleDiplomaticMission extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.MERPEOPLE_DIPLOMATIC_MISSION, tags: [Tag.MARS, Tag.ANIMAL], cost: 10, victoryPoints: 1, behavior: {ocean: {}, drawCard: 1}, metadata: {cardNumber: 'HP194', renderData: CardRenderer.builder((b) => {b.oceans(1).cards(1);}), description: 'Place an ocean. Draw a card. (The merpeople sang an eerie song beneath the lake\'s surface, warning of the task ahead.)'}});}
}
