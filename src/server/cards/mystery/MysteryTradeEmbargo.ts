import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryTradeEmbargo extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_TRADE_EMBARGO, tags: [Tag.JOVIAN], cost: 21,
      behavior: {production: {energy: 2}},
      metadata: {cardNumber: 'MY205', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.energy(2);});}),
        description: 'Adjust production. (Progress demands sacrifice.)'},
    });
  }
}
