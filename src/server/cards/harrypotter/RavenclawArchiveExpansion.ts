import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class RavenclawArchiveExpansion extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.RAVENCLAW_ARCHIVE_EXPANSION, tags: [Tag.SCIENCE, Tag.BUILDING], cost: 14, victoryPoints: 1, behavior: {drawCard: 3}, metadata: {cardNumber: 'HP193', renderData: CardRenderer.builder((b) => {b.cards(3);}), description: 'Draw 3 cards. (Where those of wit and learning will always find their kind.)'}});}
}
