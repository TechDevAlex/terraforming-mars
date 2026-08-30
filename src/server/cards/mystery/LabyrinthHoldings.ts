import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class LabyrinthHoldings extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.LABYRINTH_HOLDINGS, tags: [Tag.PLANT, Tag.MICROBE], startingMegaCredits: 41,
      firstAction: {text: 'Initial action', production: {plants: 2}},
      metadata: {cardNumber: 'MYCORP16', description: 'You start with 41 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(41);})
      },
    });
  }
}
