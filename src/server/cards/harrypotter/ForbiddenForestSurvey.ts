import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class ForbiddenForestSurvey extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.FORBIDDEN_FOREST_SURVEY, tags: [Tag.PLANT, Tag.ANIMAL], cost: 10, behavior: {stock: {plants: 4}, drawCard: 1}, metadata: {cardNumber: 'HP80', renderData: CardRenderer.builder((b) => {b.plants(4).cards(1);}), description: 'Gain 4 plants. Draw a card. (The forest is forbidden for good reason—centaurs, acromantulas, and worse dwell within.)'}});}
}
