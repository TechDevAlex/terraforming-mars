import {PreludeCard} from '../prelude/PreludeCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class DesignCompany extends PreludeCard {
  constructor() {
    super({
      name: CardName.DESIGN_COMPANY,
      tags: [Tag.MARS, Tag.BUILDING],

      behavior: {
        production: {steel: 2},
        drawCard: {count: 2, tag: Tag.BUILDING},
      },

      metadata: {
        cardNumber: 'PfP08',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.steel(2)).br;
          b.cards(2, {secondaryTag: Tag.BUILDING});
        }),
        description: 'Increase your steel production 2 step. Draw 2 cards with a building tag.',
      },
    });
  }
}

