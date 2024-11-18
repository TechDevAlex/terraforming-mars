import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class TropicalResort extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.TROPICAL_RESORT,
      tags: [Tag.BUILDING],
      cost: 13,
      victoryPoints: 2,

      behavior: {
        production: {megacredits: 8, heat: -4},
      },
      metadata: {
        cardNumber: '098',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) =>{
            pb.minus().heat(4).br;
            pb.plus().megacredits(8);
          });
        }),
        description: 'Reduce your heat production 4 steps and increase your M€ production 8 steps.',
      },
    });
  }
}
