import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MidnightLabs extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.MIDNIGHT_LABS, tags: [Tag.SCIENCE], startingMegaCredits: 36,
      firstAction: {text: 'Initial action', drawCard: 2, production: {megacredits: 1}},
      metadata: {cardNumber: 'MYCORP13', description: 'You start with 36 M€. As your first action, draw 2 cards.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(36);})
      },
    });
  }
}
