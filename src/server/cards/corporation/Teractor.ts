import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from './CorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {ICorporationCard} from './ICorporationCard';

export class Teractor extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.TERACTOR,
      tags: [Tag.EARTH],
      startingMegaCredits: 48,

      firstAction: {
        text: 'Draw 3 cards with an Earth tag',
        drawCard: {count: 3, tag: Tag.EARTH},
      },

      cardDiscount: {tag: Tag.EARTH, amount: 3},
      metadata: {
        cardNumber: 'R30',
        description: 'You start with 48 M€.',
        renderData: CardRenderer.builder((b) => {
          b.br.br;
          b.megacredits(48).nbsp.cards(3, {secondaryTag: Tag.EARTH});
          b.corpBox('effect', (ce) => {
            ce.effect('When you play an Earth tag, you pay 3 M€ less for it.', (eb) => {
              eb.tag(Tag.EARTH).startEffect.megacredits(-3);
            });
          });
        }),
      },
    });
  }
}
