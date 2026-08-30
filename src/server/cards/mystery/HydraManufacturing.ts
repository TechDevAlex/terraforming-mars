import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class HydraManufacturing extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.HYDRA_MANUFACTURING, tags: [Tag.PLANT], startingMegaCredits: 44,
      firstAction: {text: 'Initial action', production: {plants: 1, megacredits: 2}},
      metadata: {cardNumber: 'MYCORP24', description: 'You start with 44 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(44);})
      },
    });
  }
}
