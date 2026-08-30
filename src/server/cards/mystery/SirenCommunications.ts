import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SirenCommunications extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.SIREN_COMMUNICATIONS, tags: [Tag.MICROBE, Tag.PLANT], startingMegaCredits: 36,
      firstAction: {text: 'Initial action', production: {plants: 1}},
      metadata: {cardNumber: 'MYCORP27', description: 'You start with 36 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(36);})
      },
    });
  }
}
