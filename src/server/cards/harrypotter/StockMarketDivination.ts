import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class StockMarketDivination extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.STOCK_MARKET_DIVINATION, tags: [Tag.EARTH], cost: 5,
      requirements: {tag: Tag.SCIENCE, count: 1},
      behavior: {production: {megacredits: 4}},
      metadata: {cardNumber: 'HP210', renderData: CardRenderer.builder((b) => {
        b.production((pb) => pb.megacredits(4));
      }), description: 'Requires 1 science tag. Increase M€ production 4 steps. (I see the Grim! A market crash is coming — sell all our positions!)'}
    });
  }
}
