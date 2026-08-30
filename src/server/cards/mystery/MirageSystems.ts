import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MirageSystems extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.MIRAGE_SYSTEMS, tags: [Tag.POWER, Tag.SCIENCE], startingMegaCredits: 43,
      firstAction: {text: 'Initial action', production: {energy: 1}},
      metadata: {cardNumber: 'MYCORP17', description: 'You start with 43 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(43);})
      },
    });
  }
}
