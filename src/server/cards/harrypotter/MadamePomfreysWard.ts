import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class MadamePomfreysWard extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.MADAME_POMFREYS_WARD, tags: [Tag.BUILDING, Tag.SCIENCE], cost: 8, behavior: {production: {megacredits: 2}}, metadata: {cardNumber: 'HP52', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(2));}), description: 'Increase M€ production 2 steps. (Skele-Gro tastes terrible but regrows bones overnight—no complaints allowed.)'}});}
}
