import {Tag} from '../../../common/cards/Tag';
import {PreludeCard} from './PreludeCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class BiosphereSupport extends PreludeCard {
  constructor() {
    super({
      name: CardName.BIOSPHERE_SUPPORT,
      tags: [Tag.PLANT, Tag.ANIMAL],
      behavior: {
        production: {plants: 2},
        drawCard: {count: 1, tag: Tag.ANIMAL},
      },

      metadata: {
        cardNumber: 'P05',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.plants(2);
            b.cards(1, {secondaryTag: Tag.ANIMAL});
          });
        }),
        description: 'Increase your plant production 2 steps and draw an animal card.',
      },
    });
  }
}

