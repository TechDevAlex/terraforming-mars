import {PreludeCard} from './PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class Loan extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.LOAN,

      behavior: {
        production: {megacredits: -3},
        stock: {megacredits: 39},
      },

      metadata: {
        cardNumber: 'P17',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.minus().megacredits(3)).br;
          b.megacredits(39);
        }),
        description: 'Gain 39 M€. Decrease your M€ production 3 steps.',
      },
    });
  }
}

