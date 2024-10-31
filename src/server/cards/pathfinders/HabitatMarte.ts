import {CorporationCard} from '../corporation/CorporationCard';
import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class HabitatMarte extends CorporationCard {
  constructor() {
    super({
      name: CardName.HABITAT_MARTE,
      tags: [Tag.MARS, Tag.MARS],
      startingMegaCredits: 46,

      metadata: {
        cardNumber: 'PfC22',
        description: 'You start with 46 M€.',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(46);
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
