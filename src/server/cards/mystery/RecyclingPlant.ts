import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class RecyclingPlant extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.RECYCLING_PLANT, tags: [Tag.BUILDING, Tag.JOVIAN], cost: 16,
      behavior: {tr: 1, production: {steel: 1}},
      metadata: {cardNumber: 'MY156', renderData: CardRenderer.builder((b) => {b.text('TR and production.');}),
        description: 'Raise your TR 1 step. (Space warps.)'},
    });
  }
}
