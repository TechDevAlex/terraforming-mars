import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class BowtruckleNursery extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.BOWTRUCKLE_NURSERY, tags: [Tag.PLANT, Tag.ANIMAL], cost: 4, behavior: {production: {plants: 1}}, metadata: {cardNumber: 'HP88', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.plants(1));}), description: 'Increase plant production 1 step. (These tiny stick creatures guard wand-wood trees with fierce devotion.)'}});}
}
