import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class NebulaVentures extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.NEBULA_VENTURES, tags: [Tag.EARTH], startingMegaCredits: 48,
      metadata: {cardNumber: 'MYCORP07', description: 'You start with 48 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(48);})
      },
    });
  }
}
