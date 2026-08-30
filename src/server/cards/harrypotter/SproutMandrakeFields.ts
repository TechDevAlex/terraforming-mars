import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class SproutMandrakeFields extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.SPROUT_MANDRAKE_FIELDS, tags: [Tag.PLANT], cost: 8, victoryPoints: 1, behavior: {production: {plants: 2}}, metadata: {cardNumber: 'HP94', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.plants(2));}), description: 'Increase plant production 2 steps. (Row upon row of screaming mandrakes, tended with care and industrial earmuffs.)'}});}
}
