import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class ProteanCharmCoins extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.PROTEAN_CHARM_COINS, tags: [Tag.SCIENCE, Tag.EARTH], cost: 9, behavior: {production: {megacredits: 1}}, metadata: {cardNumber: 'HP99', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(1));}), description: 'Increase M€ production 1 step. (The enchanted galleons burned hot in every DA member\'s pocket when the call went out.)'}});}
}
