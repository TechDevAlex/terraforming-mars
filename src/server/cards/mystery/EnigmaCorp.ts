import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class EnigmaCorp extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.ENIGMA_CORP, tags: [Tag.SCIENCE], startingMegaCredits: 42,
      firstAction: {text: 'Initial action', drawCard: 2},
      metadata: {cardNumber: 'MYCORP01', description: 'You start with 42 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(42);})
      },
    });
  }
}
