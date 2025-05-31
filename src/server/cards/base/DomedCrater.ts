
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit, max} from '../Options';

export class DomedCrater extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.DOMED_CRATER,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 26,
      victoryPoints: 2,

      behavior: {
        production: {energy: -1, megacredits: 4},
        stock: {plants: 4},
        city: {},
      },

      requirements: {oxygen: 7, max},
      metadata: {
        cardNumber: '016',
        description: {
          text: 'Oxygen must be 7% or less. Gain 4 plants. Place a city tile. Decrease your energy production 1 step and increase your M€ production 4 steps.',
          align: 'left',
        },
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(4);
          }).nbsp.city().plants(4, {digit}).br;
        }),
      },
    });
  }
}
