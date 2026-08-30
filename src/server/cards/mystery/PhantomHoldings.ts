import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PhantomHoldings extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.PHANTOM_HOLDINGS, tags: [Tag.EARTH], startingMegaCredits: 45,
      firstAction: {text: 'Initial action', drawCard: 1},
      metadata: {cardNumber: 'MYCORP03', description: 'You start with 45 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(45);})
      },
    });
  }
}
