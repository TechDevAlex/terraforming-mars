import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class MagicBeanStalk extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.MAGIC_BEAN_STALK, tags: [Tag.PLANT], cost: 6, behavior: {stock: {plants: 2}, global: {oxygen: 1}}, metadata: {cardNumber: 'HP167', renderData: CardRenderer.builder((b) => {b.plants(2).oxygen(1);}), description: 'Gain 2 plants. Raise oxygen 1 step. (The enchanted beans grow overnight into stalks that pierce the clouds.)'}});}
}
