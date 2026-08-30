import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ParadoxInc extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.PARADOX_INC, tags: [Tag.MICROBE], startingMegaCredits: 40,
      firstAction: {text: 'Initial action', production: {plants: 1, megacredits: 1}},
      metadata: {cardNumber: 'MYCORP09', description: 'You start with 40 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(40);})
      },
    });
  }
}
