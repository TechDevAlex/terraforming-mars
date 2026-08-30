import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DarkStarMining extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.DARK_STAR_MINING, tags: [Tag.BUILDING, Tag.POWER], startingMegaCredits: 38,
      firstAction: {text: 'Initial action', production: {energy: 1, steel: 1}},
      metadata: {cardNumber: 'MYCORP11', description: 'You start with 38 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(38);})
      },
    });
  }
}
