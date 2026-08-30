import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ShadowIndustries extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.SHADOW_INDUSTRIES, tags: [Tag.BUILDING], startingMegaCredits: 38,
      firstAction: {text: 'Initial action', production: {steel: 1}},
      metadata: {cardNumber: 'MYCORP02', description: 'You start with 38 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(38);})
      },
    });
  }
}
