import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class FoodFactory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.FOOD_FACTORY,
      tags: [Tag.BUILDING],
      cost: 15,

      behavior: {
        production: {megacredits: 10, plants: -2},
      },
      victoryPoints: 2,

      metadata: {
        cardNumber: '041',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().plants(2).br;
            pb.plus().megacredits(10);
          });
        }),
        description: 'Decrease your plant production 2 steps and increase your M€ production 10 steps.',
      },
    });
  }
}
