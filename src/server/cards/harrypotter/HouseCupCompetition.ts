import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class HouseCupCompetition extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.HOUSE_CUP_COMPETITION, tags: [Tag.EARTH, Tag.SCIENCE], cost: 11, victoryPoints: 1, behavior: {production: {megacredits: 1}}, metadata: {cardNumber: 'HP164', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(1));}), description: 'Increase M€ production 1 step. (Four giant hourglasses count the gems—ruby, emerald, sapphire, and topaz.)'}});}
}
