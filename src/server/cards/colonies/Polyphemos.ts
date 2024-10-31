import {CorporationCard} from '../corporation/CorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

export class Polyphemos extends CorporationCard {
  constructor() {
    super({
      name: CardName.POLYPHEMOS,
      startingMegaCredits: 60,
      cardCost: 6,

      behavior: {
        production: {megacredits: 6},
        stock: {titanium: 6},
      },

      metadata: {
        cardNumber: 'R11',
        description: 'You start with 60 M€. Increase your M€ production 6 steps. Gain 6 titanium.',
        renderData: CardRenderer.builder((b) => {
          b.br;
          b.megacredits(60).nbsp.production((pb) => pb.megacredits(6)).nbsp.titanium(6, {digit});
          b.corpBox('effect', (ce) => {
            ce.effect('When you buy a card to hand, pay 6M€ instead of 3, including the starting hand.', (eb) => {
              eb.cards(1).asterix().startEffect.megacredits(6);
            });
          });
        }),
      },
    });
  }
}
