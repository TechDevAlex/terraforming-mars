import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class PhoenixRebirthInc extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.PHOENIX_REBIRTH_INC, tags: [Tag.BUILDING, Tag.EARTH], startingMegaCredits: 42,
      firstAction: {text: 'Initial action', production: {steel: 1, megacredits: 1}},
      metadata: {cardNumber: 'MYCORP22', description: 'You start with 42 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(42);})
      },
    });
  }
}
