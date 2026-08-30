import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CerberusSecurity extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.CERBERUS_SECURITY, tags: [Tag.POWER], startingMegaCredits: 35,
      firstAction: {text: 'Initial action', production: {energy: 3}},
      metadata: {cardNumber: 'MYCORP23', description: 'You start with 35 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(35);})
      },
    });
  }
}
