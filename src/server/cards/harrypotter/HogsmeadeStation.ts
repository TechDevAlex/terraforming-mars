import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class HogsmeadeStation extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.HOGSMEADE_STATION, tags: [Tag.CITY, Tag.BUILDING], cost: 9, victoryPoints: 1, behavior: {production: {megacredits: 2}}, metadata: {cardNumber: 'HP147', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(2));}), description: 'Increase M€ production 2 steps. (The little station welcomed students each September, lanterns bobbing in the dark.)'}});}
}
