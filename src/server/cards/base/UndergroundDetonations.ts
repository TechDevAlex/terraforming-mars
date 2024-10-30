import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class UndergroundDetonations extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.UNDERGROUND_DETONATIONS,
      tags: [Tag.BUILDING],
      cost: 8,

      action: {
        spend: {megacredits: 7},
        production: {heat: 3},
      },

      metadata: {
        cardNumber: '202',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 7M€ to increase your heat production 3 steps.', (eb) => {
            eb.megacredits(7).startAction.production((pb)=>pb.heat(3));
          });
        }),
      },
    });
  }
}
