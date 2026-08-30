import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class OracleAnalytics extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.ORACLE_ANALYTICS, tags: [Tag.EARTH, Tag.BUILDING], startingMegaCredits: 47,
      firstAction: {text: 'Initial action', production: {megacredits: 1}},
      metadata: {cardNumber: 'MYCORP26', description: 'You start with 47 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(47);})
      },
    });
  }
}
