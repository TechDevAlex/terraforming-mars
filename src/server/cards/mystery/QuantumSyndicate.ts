import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class QuantumSyndicate extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.QUANTUM_SYNDICATE, tags: [Tag.JOVIAN], startingMegaCredits: 42,
      firstAction: {text: 'Initial action', production: {titanium: 1}},
      metadata: {cardNumber: 'MYCORP10', description: 'You start with 42 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(42);})
      },
    });
  }
}
