import {CorporationCard} from '../corporation/CorporationCard';
import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {GlobalParameter} from '../../../common/GlobalParameter';

export class MorningStarInc extends CorporationCard {
  constructor() {
    super({
      name: CardName.MORNING_STAR_INC,
      tags: [Tag.VENUS],
      startingMegaCredits: 41,
      globalParameterRequirementBonus: {steps: 3, parameter: GlobalParameter.VENUS},

      firstAction: {
        text: 'Draw 4 cards with a Venus tag',
        drawCard: {count: 4, tag: Tag.VENUS},
      },

      metadata: {
        cardNumber: 'R06',
        description: 'You start with 41 M€. As your first action, reveal cards from the deck until you have revealed 4 Venus-tag cards. Take those into hand and discard the rest.',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(41).nbsp.cards(4, {secondaryTag: Tag.VENUS});
          b.corpBox('effect', (ce) => {
            ce.effect('Your Venus requirements are +/- 3 steps, your choice in each case.', (eb) => {
              eb.plate('Venus requirements').startEffect.text('+/- 3');
            });
          });
        }),
      },
    });
  }
}
