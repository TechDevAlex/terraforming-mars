import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class BasiliskFangMining extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.BASILISK_FANG_MINING, tags: [Tag.MICROBE, Tag.SCIENCE], cost: 10, behavior: {stock: {megacredits: 5}}, metadata: {cardNumber: 'HP90', renderData: CardRenderer.builder((b) => {b.megacredits(5);}), description: 'Gain 5 M€. (Basilisk venom destroys almost anything—including fragments of the darkest magic.)'}});}
}
