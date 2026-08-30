import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class EclipseCorp extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.ECLIPSE_CORP, tags: [Tag.SPACE], startingMegaCredits: 39,
      firstAction: {text: 'Initial action', stock: {titanium: 3}},
      metadata: {cardNumber: 'MYCORP15', description: 'You start with 39 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(39);})
      },
    });
  }
}
