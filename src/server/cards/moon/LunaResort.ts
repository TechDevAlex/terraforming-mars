import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {all} from '../Options';

export class LunaResort extends Card {
  constructor() {
    super({
      name: CardName.LUNA_RESORT,
      type: CardType.AUTOMATED,
      tags: [Tag.MOON],
      cost: 11,
      reserveUnits: {titanium: 1},

      behavior: {
        production: {energy: -1, megacredits: 3},
        moon: {habitatTile: {}},
      },

      requirements: {habitatTiles: 2, all},
      metadata: {
        description:
          'Requires 2 habitats on The Moon. Spend 1 titanium. Decrease your energy production 1 step and increase your M€ production 3 steps. Place 1 habitat, raise the habitat rate 1 step.',
        cardNumber: 'M21',
        renderData: CardRenderer.builder((b) => {
          b.minus().titanium(1).production((pb) => {
            pb.minus().energy(1).nbsp.plus().megacredits(3);
          }).br;
          b.moonHabitat();
        }),
      },
    });
  }
}
