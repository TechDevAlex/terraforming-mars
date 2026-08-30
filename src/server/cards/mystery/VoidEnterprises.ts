import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class VoidEnterprises extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.VOID_ENTERPRISES, tags: [Tag.SCIENCE, Tag.BUILDING], startingMegaCredits: 35,
      firstAction: {text: 'Initial action', drawCard: 3},
      metadata: {cardNumber: 'MYCORP08', description: 'You start with 35 M€. As your first action, draw 3 cards.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(35);})
      },
    });
  }
}
