import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';

export class NaturalDisaster extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.NATURAL_DISASTER,
      tags: [Tag.MARS],
      cost: 12,

      behavior: {
        global: {temperature: 1, oxygen: 1},
        production: {megacredits: -2},
      },

      metadata: {
        cardNumber: 'BM12',
        renderData: CardRenderer.builder((b) => {
          b.temperature(1).oxygen(1).br;
          b.production((pb) => pb.megacredits(-2));
        }),
        description: 'Raise temperature 1 step. Raise oxygen 1 step. Decrease your M€ production 2 steps.',
      },
    });
  }
}
