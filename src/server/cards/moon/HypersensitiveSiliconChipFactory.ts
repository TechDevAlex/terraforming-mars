import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {all} from '../Options';

export class HypersensitiveSiliconChipFactory extends Card {
  constructor() {
    super({
      name: CardName.HYPERSENSITIVE_SILICON_CHIP_FACTORY,
      type: CardType.AUTOMATED,
      tags: [Tag.BUILDING],
      cost: 8,

      behavior: {
        production: {megacredits: 4},
      },
      requirements: {miningTiles: 1, all},
      reserveUnits: {titanium: 1},

      metadata: {
        description: 'Requires 1 mining tile on The Moon. Spend 1 titanium. Increase your M€ production 4 steps.',
        cardNumber: 'M43',
        renderData: CardRenderer.builder((b) => {
          b.minus().titanium(1).nbsp;
          b.production((pb) => pb.megacredits(4)).br;
        }),
      },
    });
  }
}
