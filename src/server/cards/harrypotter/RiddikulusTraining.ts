import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class RiddikulusTraining extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.RIDDIKULUS_TRAINING, tags: [Tag.SCIENCE], cost: 5, behavior: {drawCard: 2}, metadata: {cardNumber: 'HP119', renderData: CardRenderer.builder((b) => {b.cards(2);}), description: 'Draw 2 cards. (Face your fear and make it funny—the boggart cannot survive laughter.)'}});}
}
