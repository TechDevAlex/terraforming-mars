import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class SortingHatCeremony extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.SORTING_HAT_CEREMONY, tags: [Tag.SCIENCE], cost: 3, behavior: {drawCard: 3}, metadata: {cardNumber: 'HP137', renderData: CardRenderer.builder((b) => {b.cards(3);}), description: 'Draw 3 cards. (Hmm, difficult—plenty of courage, a fine mind—better be GRYFFINDOR!)'}});}
}
