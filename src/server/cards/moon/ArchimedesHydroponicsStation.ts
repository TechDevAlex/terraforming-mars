import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class ArchimedesHydroponicsStation extends Card {
  constructor() {
    super({
      name: CardName.ARCHIMEDES_HYDROPONICS_STATION,
      type: CardType.AUTOMATED,
      tags: [Tag.PLANT],
      cost: 12,

      behavior: {
        production: {energy: -1, plants: 2},
      },

      metadata: {
        description: 'Decrease your energy production 1 step. Increase your plant production 2 steps.',
        cardNumber: 'M27',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.minus().energy(1).nbsp.plus().plants(2));
        }),
      },
    });
  }
}
