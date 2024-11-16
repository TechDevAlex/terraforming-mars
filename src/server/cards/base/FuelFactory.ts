import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class FuelFactory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.FUEL_FACTORY,
      tags: [Tag.BUILDING],
      cost: 7,

      behavior: {
        production: {energy: -1, megacredits: 2, titanium: 1},
      },

      metadata: {
        cardNumber: '180',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().titanium(1).megacredits(2);
          });
        }),
        description: 'Decrease your energy production 1 step and increase your titanium production 1 step and your M€ production 2 steps.',
      },
    });
  }
}
