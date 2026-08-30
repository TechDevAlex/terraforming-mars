import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class GiantSquidHabitat extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.GIANT_SQUID_HABITAT, tags: [Tag.ANIMAL, Tag.MARS], cost: 9, behavior: {ocean: {}, stock: {plants: 2}}, metadata: {cardNumber: 'HP77', renderData: CardRenderer.builder((b) => {b.oceans(1).plants(2);}), description: 'Place an ocean. Gain 2 plants. (The great squid drifts through the black lake, occasionally waving a tentacle at passing students.)'}});}
}
