import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class BansheeWailResonance extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.BANSHEE_WAIL_RESONANCE, tags: [Tag.MICROBE, Tag.POWER], cost: 10, behavior: {production: {energy: 2}}, metadata: {cardNumber: 'HP178', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.energy(2));}), description: 'Increase energy production 2 steps. (The scream of the banshee heralds death—those who hear it never forget.)'}});}
}
