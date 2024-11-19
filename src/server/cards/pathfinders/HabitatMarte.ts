import {CorporationCard} from '../corporation/CorporationCard';
import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class HabitatMarte extends CorporationCard {
  constructor() {
    super({
      name: CardName.HABITAT_MARTE,
      tags: [Tag.MARS, Tag.MARS],
      startingMegaCredits: 42,

      firstAction: {
        text: 'Draw 2 cards with a Mars tag',
        drawCard: {count: 2, tag: Tag.MARS},
      },

      metadata: {
        cardNumber: 'PfC22',
        description: 'You start with 42 M€.',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(42).nbsp.cards(2, {secondaryTag: Tag.MARS});
          b.corpBox('effect', (ce) => {
            ce.effect('Mars tags also count as science tags.', (eb) => {
              eb.tag(Tag.MARS).startEffect.tag(Tag.SCIENCE);
            });
          });
        }),
      },
    });
  }
  // Behavior in Player.getTagCount
}
