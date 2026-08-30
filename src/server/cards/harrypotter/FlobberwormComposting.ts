import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class FlobberwormComposting extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.FLOBBERWORM_COMPOSTING, tags: [Tag.MICROBE, Tag.PLANT], cost: 3, behavior: {production: {plants: 1}}, metadata: {cardNumber: 'HP142', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.plants(1));}), description: 'Increase plant production 1 step. (The most boring creature in existence, but excellent for soil enrichment.)'}});}
}
