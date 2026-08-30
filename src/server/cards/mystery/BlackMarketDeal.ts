import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BlackMarketDeal extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BLACK_MARKET_DEAL, tags: [Tag.JOVIAN], cost: 25,
      behavior: {production: {titanium: 2}},
      metadata: {cardNumber: 'MY011', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.titanium(2);});}),
        description: 'Adjust production. (The veil lifts.)'},
    });
  }
}
