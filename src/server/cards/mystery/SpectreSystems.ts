import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SpectreSystems extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.SPECTRE_SYSTEMS, tags: [Tag.SPACE], startingMegaCredits: 40,
      firstAction: {text: 'Initial action', production: {titanium: 1}},
      metadata: {cardNumber: 'MYCORP04', description: 'You start with 40 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(40);})
      },
    });
  }
}
