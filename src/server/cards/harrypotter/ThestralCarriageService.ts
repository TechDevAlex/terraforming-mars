import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class ThestralCarriageService extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.THESTRAL_CARRIAGE_SERVICE, tags: [Tag.ANIMAL, Tag.SPACE], cost: 8, behavior: {production: {titanium: 1}}, metadata: {cardNumber: 'HP166', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.titanium(1));}), description: 'Increase titanium production 1 step. (The skeletal horses pulled the carriages faithfully, seen only by the grief-touched.)'}});}
}
