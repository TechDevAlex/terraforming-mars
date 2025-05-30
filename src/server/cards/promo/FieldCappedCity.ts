import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class FieldCappedCity extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.FIELD_CAPPED_CITY,
      tags: [Tag.CITY, Tag.BUILDING, Tag.POWER],
      cost: 28,

      behavior: {
        production: {energy: 1, megacredits: 3},
        stock: {plants: 3},
        city: {},
      },

      metadata: {
        cardNumber: 'X21',
        description: 'Increase your M€ production 3 steps, increase your energy production 1 step, gain 3 plants, and place a city tile.',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(3).br;
            pb.energy(1);
          }).nbsp.city().br;
          b.plants(3);
        }),
      },
    });
  }
}
