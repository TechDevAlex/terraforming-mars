import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {MoonSpaces} from '../../../common/moon/MoonSpaces';
import {Card} from '../Card';
import {AltSecondaryTag} from '../../../common/cards/render/AltSecondaryTag';

export class MareNubiumMine extends Card {
  constructor() {
    super({
      name: CardName.MARE_NUBIUM_MINE,
      type: CardType.AUTOMATED,
      tags: [Tag.MOON, Tag.BUILDING],
      cost: 16,

      behavior: {
        production: {titanium: 1},
        moon: {
          mineTile: {space: MoonSpaces.MARE_NUBIUM},
        },
      },
      reserveUnits: {titanium: 1},

      metadata: {
        description: 'Spend 1 titanium. Increase your titanium production 1 step. Place a mine ON THE RESERVED AREA and raise the mining rate 1 step.',
        cardNumber: 'M02',
        renderData: CardRenderer.builder((b) => {
          b.minus().titanium(1);
          b.production((pb) => pb.titanium(1)).moonMine({secondaryTag: AltSecondaryTag.MOON_MINING_RATE}).asterix();
        }),
      },
    });
  }
}
