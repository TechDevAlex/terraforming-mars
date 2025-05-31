import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';

export class CaretakerContract extends ActionCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.CARETAKER_CONTRACT,
      cost: 2,
      requirements: {temperature: -20},

      action: {
        spend: {heat: 6},
        tr: 1,
      },

      metadata: {
        cardNumber: '154',
        description: 'Stall the heat track by converting 6 heat into a TR',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 6 heat to increase your terraform rating 1 step.', (eb) => {
            eb.heat(6).startAction.tr(1);
          });
        }),
      },
    });
  }
}
