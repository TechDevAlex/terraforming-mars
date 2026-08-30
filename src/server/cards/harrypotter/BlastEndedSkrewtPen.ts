import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class BlastEndedSkrewtPen extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.BLAST_ENDED_SKREWT_PEN, tags: [Tag.ANIMAL, Tag.MARS], cost: 7, behavior: {production: {heat: 2}}, metadata: {cardNumber: 'HP118', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.heat(2));}), description: 'Increase heat production 2 steps. (Nobody wanted to tend the Skrewts, but Hagrid beamed like a proud father.)'}});}
}
