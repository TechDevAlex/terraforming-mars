import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';

export class TheGreatFloo extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.THE_GREAT_FLOO, tags: [Tag.EARTH, Tag.BUILDING], cost: 3,
      cardDiscount: {amount: 2},
      requirements: {production: Resource.HEAT, count: 5},
      behavior: {production: {heat: -5}},
      metadata: {cardNumber: 'HP201', renderData: CardRenderer.builder((b) => {
        b.effect('When you play a card, you pay 2 M€ less for it.', (eb) => {eb.empty().startEffect.megacredits(-2);}).br;
        b.production((pb) => pb.minus().heat(5));
      }), description: 'Requires 5 heat production. Decrease heat production 5 steps. When you play a card, you pay 2 M€ less for it. (Scholars found they could extend the floo network to other planets — they just required a really big hearth-fire.)'}
    });
  }
}
