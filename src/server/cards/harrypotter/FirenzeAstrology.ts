import {IProjectCard} from '../IProjectCard';import {Tag} from '../../../common/cards/Tag';import {Card} from '../Card';import {CardType} from '../../../common/cards/CardType';import {CardName} from '../../../common/cards/CardName';import {CardRenderer} from '../render/CardRenderer';
export class FirenzeAstrology extends Card implements IProjectCard {
  constructor() {super({type: CardType.AUTOMATED, name: CardName.FIRENZE_ASTROLOGY, tags: [Tag.SPACE, Tag.ANIMAL], cost: 12, victoryPoints: 1, behavior: {drawCard: 2, stock: {titanium: 1}}, metadata: {cardNumber: 'HP150', renderData: CardRenderer.builder((b) => {b.cards(2).titanium(1);}), description: 'Draw 2 cards. Gain 1 titanium. (The centaur taught divination differently—through stars, not tea leaves.)'}});}
}
