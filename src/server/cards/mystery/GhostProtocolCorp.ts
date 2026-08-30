import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GhostProtocolCorp extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.GHOST_PROTOCOL_CORP, tags: [], startingMegaCredits: 50,
      metadata: {cardNumber: 'MYCORP12', description: 'You start with 50 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(50);})
      },
    });
  }
}
