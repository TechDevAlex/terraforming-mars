import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class FlourishBlottsSupply extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.FLOURISH_BLOTTS_SUPPLY, tags: [Tag.EARTH], cost: 5, behavior: {drawCard: 2}, metadata: {cardNumber: 'HP127', renderData: CardRenderer.builder((b) => {b.cards(2);}), description: 'Draw 2 cards. (The bookshop on Diagon Alley stocks everything from basic spellbooks to restricted tomes.)'}});}
}
