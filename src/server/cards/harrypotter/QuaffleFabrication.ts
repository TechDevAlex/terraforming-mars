import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class QuaffleFabrication extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.QUAFFLE_FABRICATION, tags: [Tag.BUILDING], cost: 4, behavior: {production: {steel: 1, megacredits: 1}}, metadata: {cardNumber: 'HP189', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.steel(1).megacredits(1));}), description: 'Increase steel and M€ production 1 step each. (Enchanted leather, perfectly weighted—the Quaffle practically scores itself.)'}});}
}
