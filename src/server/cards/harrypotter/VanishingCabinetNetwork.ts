import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class VanishingCabinetNetwork extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.VANISHING_CABINET_NETWORK, tags: [Tag.BUILDING, Tag.SCIENCE], cost: 11, behavior: {production: {megacredits: 1}}, metadata: {cardNumber: 'HP84', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(1));}), description: 'Increase M€ production 1 step. (One step in Borgin and Burkes, the next in Hogwarts—if the cabinet is repaired.)'}});}
}
