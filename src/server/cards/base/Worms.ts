import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class Worms extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.WORMS,
      tags: [Tag.MICROBE],
      cost: 6,

      behavior: {
        production: {plants: {tag: Tag.MICROBE, per: 2}},
      },

      requirements: {oxygen: 4},
      metadata: {
        cardNumber: '130',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(1).slash().tag(Tag.MICROBE, 2));
        }),
        description: '4% Oxygen. 1 Plantprod/2microbe tags, including this.',
      },
    });
  }
}
