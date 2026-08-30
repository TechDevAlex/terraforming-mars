import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class MoaningMyrtlesPlumbing extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.MOANING_MYRTLES_PLUMBING, tags: [Tag.BUILDING, Tag.MARS], cost: 4, behavior: {production: {heat: 1}, ocean: {}}, metadata: {cardNumber: 'HP124', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.heat(1)).oceans(1);}), description: 'Increase heat production 1 step. Place an ocean. (She flooded the bathroom again—water everywhere, as usual.)'}});}
}
