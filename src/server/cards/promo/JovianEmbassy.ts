import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class JovianEmbassy extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.JOVIAN_EMBASSY,
      tags: [Tag.JOVIAN, Tag.BUILDING],
      requirements: {tag: Tag.JOVIAN, count: 2},
      cost: 20,
      victoryPoints: {tag: Tag.JOVIAN, per: 2},

      behavior: {
        tr: 2,
      },

      metadata: {
        cardNumber: 'X23',
        renderData: CardRenderer.builder((b) => {
          b.tr(2);
        }),
        description: 'Requires 2 Jovian Tags. Raise your TR 2 steps.',
      },
    });
  }
}
