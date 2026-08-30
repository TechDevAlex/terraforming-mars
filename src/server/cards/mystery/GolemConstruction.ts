import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class GolemConstruction extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.GOLEM_CONSTRUCTION, tags: [Tag.BUILDING, Tag.POWER], startingMegaCredits: 43,
      firstAction: {text: 'Initial action', production: {steel: 1, energy: 1}},
      metadata: {cardNumber: 'MYCORP28', description: 'You start with 43 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(43);})
      },
    });
  }
}
