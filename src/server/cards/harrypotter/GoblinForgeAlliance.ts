import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class GoblinForgeAlliance extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.GOBLIN_FORGE_ALLIANCE, tags: [Tag.BUILDING, Tag.SCIENCE], cost: 14, victoryPoints: 1, behavior: {production: {steel: 1}}, metadata: {cardNumber: 'HP122', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.steel(1));}), description: 'Increase steel production 1 step. Effect: steel is worth 1 MC more. (Goblin-wrought silver never tarnishes and absorbs only that which strengthens it.)'}});}
  public override getCardDiscount() {return 0;}
}
