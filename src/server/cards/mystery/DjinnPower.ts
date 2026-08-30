import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DjinnPower extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.DJINN_POWER, tags: [Tag.JOVIAN, Tag.SPACE], startingMegaCredits: 39,
      firstAction: {text: 'Initial action', production: {titanium: 2}},
      metadata: {cardNumber: 'MYCORP29', description: 'You start with 39 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(39);})
      },
    });
  }
}
