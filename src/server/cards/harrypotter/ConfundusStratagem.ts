import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class ConfundusStratagem extends Card implements IProjectCard {
  constructor() {super({type: CardType.EVENT, name: CardName.CONFUNDUS_STRATAGEM, tags: [Tag.POWER], cost: 6, behavior: {drawCard: 1, stock: {megacredits: 3}}, metadata: {cardNumber: 'HP159', renderData: CardRenderer.builder((b) => {b.cards(1).megacredits(3);}), description: 'Draw 1 card. Gain 3 M€. (The Confundus Charm muddles the mind—the victim can\'t remember what they were doing.)'}});}
}
