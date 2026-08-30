import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class LumosMaximaArray extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.LUMOS_MAXIMA_ARRAY, tags: [Tag.POWER, Tag.BUILDING], cost: 10, behavior: {production: {energy: 2}}, metadata: {cardNumber: 'HP73', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.energy(2));}), description: 'Increase energy production 2 steps. (A thousand points of wandlight blazed, turning night into brilliant day.)'}});}
}
