import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class WeasleyClockMonitoring extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.WEASLEY_CLOCK_MONITORING, tags: [Tag.SCIENCE, Tag.EARTH], cost: 7, behavior: {production: {megacredits: 1}}, metadata: {cardNumber: 'HP135', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(1));}), description: 'Increase M€ production 1 step. (Nine hands pointed to mortal peril—the clock had never been so terrifying.)'}});}
}
