import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class NaginiSerpentSwarm extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.NAGINI_SERPENT_SWARM, tags: [Tag.MICROBE], cost: 8, behavior: {production: {megacredits: 2}}, metadata: {cardNumber: 'HP154', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(2));}), description: 'Increase M€ production 2 steps. (Parseltongue commands the serpents—they slither where the Dark Lord wills.)'}});}
}
