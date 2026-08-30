import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class ApparitionNetwork extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.APPARITION_NETWORK, tags: [Tag.SPACE, Tag.BUILDING], cost: 13, victoryPoints: 1, behavior: {production: {megacredits: 2}}, metadata: {cardNumber: 'HP138', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(2));}), description: 'Increase M€ production 2 steps. (Destination, determination, deliberation—the three D\'s of safe magical transport.)'}});}
}
