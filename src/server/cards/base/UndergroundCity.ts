import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class UndergroundCity extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.UNDERGROUND_CITY,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 14,

      behavior: {
        production: {energy: -2, steel: 2},
        city: {},
      },

      metadata: {
        cardNumber: '032',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(2).br;
            pb.plus().steel(2);
          }).nbsp.city();
        }),
        description: 'Place a city tile. Decrease your energy production 2 steps and increase your steel production 2 steps.',
      },
    });
  }
}
