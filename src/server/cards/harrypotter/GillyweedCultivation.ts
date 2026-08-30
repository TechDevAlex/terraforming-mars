import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class GillyweedCultivation extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.GILLYWEED_CULTIVATION, tags: [Tag.PLANT, Tag.MICROBE], cost: 5, behavior: {stock: {plants: 3}, ocean: {}}, metadata: {cardNumber: 'HP57', renderData: CardRenderer.builder((b) => {b.plants(3).oceans(1);}), description: 'Gain 3 plants. Place an ocean. (One bite and gills sprout—breathing underwater becomes as natural as air.)'}});}
}
