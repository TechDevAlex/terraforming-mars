import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class HerbologyGreenhouse extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.HERBOLOGY_GREENHOUSE,
      tags: [Tag.BUILDING, Tag.PLANT],
      cost: 16,

      behavior: {
        production: {plants: 2, megacredits: 1},
      },

      metadata: {
        cardNumber: 'HP10',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(2).megacredits(1));
        }),
        description: 'Increase your plant production 2 steps and your M€ production 1 step.',
      },
    });
  }
}
