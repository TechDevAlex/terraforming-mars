import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

export class FiendfyreUnleashed extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.FIENDFYRE_UNLEASHED,
      tags: [Tag.SPACE],
      cost: 20,

      behavior: {
        global: {temperature: 1},
        stock: {heat: 5},
        tr: 1,
      },

      metadata: {
        cardNumber: 'HP13',
        renderData: CardRenderer.builder((b) => {
          b.tr(1).temperature(1).br;
          b.heat(5, {digit});
        }),
        description: 'Raise your TR 1 step. Raise temperature 1 step. Gain 5 heat. (Fiendfyre — cursed flames of immense destructive power that take the form of fiery serpents and chimeras. Nearly impossible to control once unleashed.)',
      },
    });
  }
}
