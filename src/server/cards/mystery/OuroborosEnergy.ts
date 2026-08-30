import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class OuroborosEnergy extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.OUROBOROS_ENERGY, tags: [Tag.EARTH], startingMegaCredits: 46,
      firstAction: {text: 'Initial action', drawCard: 1, stock: {megacredits: 5}},
      metadata: {cardNumber: 'MYCORP19', description: 'You start with 46 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(46);})
      },
    });
  }
}
