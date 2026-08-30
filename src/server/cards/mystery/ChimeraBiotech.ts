import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ChimeraBiotech extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.CHIMERA_BIOTECH, tags: [Tag.BUILDING], startingMegaCredits: 37,
      firstAction: {text: 'Initial action', production: {steel: 2}},
      metadata: {cardNumber: 'MYCORP18', description: 'You start with 37 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(37);})
      },
    });
  }
}
