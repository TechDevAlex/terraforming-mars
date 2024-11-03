import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';

export class UndergroundDetonators extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.UNDERGROUND_DETONATORS,
      type: CardType.EVENT,
      tags: [Tag.MOON],
      cost: 9,

      behavior: {
        stock: {steel: 1, titanium: 1},
        moon: {miningRate: 1},
      },

      metadata: {
        description: 'Gain 1 steel and 1 titanium. Raise the mining rate 1 step.',
        cardNumber: 'M34',
        renderData: CardRenderer.builder((b) => {
          b.steel(1).titanium(1);
          b.br;
          b.moonMiningRate();
        }),
      },
    });
  }
}
