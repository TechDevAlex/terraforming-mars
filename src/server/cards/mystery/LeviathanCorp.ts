import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class LeviathanCorp extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.LEVIATHAN_CORP, tags: [], startingMegaCredits: 50,
      metadata: {cardNumber: 'MYCORP12',
        description: 'You start with 50 M€. You start with 50 M€. No special effect.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(50); b.corpBox('effect', (ce) => {ce.effect('No special effect. Big starting capital.', (eb) => {eb.empty().startEffect.empty();});});})
      },
    });
  }
}
