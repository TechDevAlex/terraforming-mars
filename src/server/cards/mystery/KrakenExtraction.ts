import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class KrakenExtraction extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.KRAKEN_EXTRACTION, tags: [Tag.SCIENCE, Tag.MICROBE], startingMegaCredits: 38,
      firstAction: {text: 'Initial action', drawCard: 2},
      metadata: {cardNumber: 'MYCORP21', description: 'You start with 38 M€. As your first action, draw 2 cards.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(38);})
      },
    });
  }
}
