import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class TundraFarming extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.TUNDRA_FARMING,
      tags: [Tag.PLANT],
      cost: 16,
      victoryPoints: 2,

      behavior: {
        production: {megacredits: 1, plants: 2},
        stock: {plants: 1},
      },

      requirements: {temperature: -6},
      metadata: {
        cardNumber: '169',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) =>{
            pb.plants(2).megacredits(1);
          }).plants(1);
        }),
        description: 'Requires -6° C or warmer. Increase your plant production 2 steps and your M€ production 1 step. Gain 1 plant.',
      },
    });
  }
}
