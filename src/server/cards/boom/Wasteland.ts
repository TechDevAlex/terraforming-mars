import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';

export class Wasteland extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.WASTELAND,
      tags: [Tag.MARS],
      cost: 4,
      victoryPoints: -2,

      behavior: {
        production: {megacredits: -1},
      },

      metadata: {
        cardNumber: 'BM09',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(-1)).br;
          b.minus().text('2 VP');
        }),
        description: 'Decrease your M€ production 1 step. -2 VP. (Cursed wasteland.)',
      },
    });
  }
}
