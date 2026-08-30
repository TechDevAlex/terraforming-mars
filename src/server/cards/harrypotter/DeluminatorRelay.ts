import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class DeluminatorRelay extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.DELUMINATOR_RELAY, tags: [Tag.POWER, Tag.SPACE], cost: 10, behavior: {production: {energy: 2}}, metadata: {cardNumber: 'HP121', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.energy(2));}), description: 'Increase energy production 2 steps. (Click—every light in the street went out, captured and held inside the device.)'}});}
}
