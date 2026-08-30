import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class ReparoReconstruction extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.REPARO_RECONSTRUCTION, tags: [Tag.BUILDING], cost: 4, behavior: {stock: {steel: 3, plants: 1}}, metadata: {cardNumber: 'HP148', renderData: CardRenderer.builder((b) => {b.steel(3).plants(1);}), description: 'Gain 3 steel and 1 plant. (A flick of the wand and shattered glass, broken walls, and torn pages mend themselves.)'}});}
}
