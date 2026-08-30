import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IProjectCard} from '../IProjectCard';

export class LightsOut extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.LIGHTS_OUT,
      tags: [Tag.POWER, Tag.MARS],
      cost: 16,

      behavior: {
        stock: {steel: 3, titanium: 3, plants: 2, heat: 2},
      },

      metadata: {
        cardNumber: 'BM13',
        renderData: CardRenderer.builder((b) => {
          b.steel(3).titanium(3).br;
          b.plants(2).heat(2);
        }),
        description: 'Gain 3 steel, 3 titanium, 2 plants, 2 heat. (The darkness reveals hidden resources.)',
      },
    });
  }
}
