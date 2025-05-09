import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class AerobrakedAmmoniaAsteroid extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.AEROBRAKED_AMMONIA_ASTEROID,
      tags: [Tag.SPACE],
      cost: 25,

      behavior: {
        production: {heat: 3, plants: 2},
        addResourcesToAnyCard: {count: 4, type: CardResource.MICROBE},
      },

      metadata: {
        description: 'Increase your heat production 3 steps and your plant production 2 steps. Add 4 microbes to ANOTHER card.',
        cardNumber: '170',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.heat(3).br;
            pb.plants(2);
          }).br;
          b.resource(CardResource.MICROBE, 4).asterix();
        }),
      },
    });
  }
}
