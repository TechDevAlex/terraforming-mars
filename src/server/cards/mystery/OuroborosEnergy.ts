import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class OuroborosEnergy extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.OUROBOROS_ENERGY, tags: [Tag.EARTH], startingMegaCredits: 48,
      cardDiscount: {amount: 1},
      metadata: {cardNumber: 'MYCORP07',
        description: 'You start with 48 M€. All cards cost 1 M€ less.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(48); b.corpBox('effect', (ce) => {ce.effect('All cards cost 1 M€ less.', (eb) => {eb.empty().startEffect.megacredits(-1);});});})
      },
    });
  }
}
