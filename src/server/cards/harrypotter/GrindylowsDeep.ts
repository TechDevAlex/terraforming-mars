import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class GrindylowsDeep extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.GRINDYLOWS_DEEP, tags: [Tag.MICROBE, Tag.MARS], cost: 5, behavior: {production: {heat: 1}, ocean: {}}, metadata: {cardNumber: 'HP105', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.heat(1)).oceans(1);}), description: 'Increase heat production 1 step. Place an ocean. (Slimy green water demons that drag swimmers down with horned fingers.)'}});}
}
