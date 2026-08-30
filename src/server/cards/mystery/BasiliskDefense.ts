import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BasiliskDefense extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.BASILISK_DEFENSE, tags: [Tag.EARTH, Tag.SCIENCE], startingMegaCredits: 41,
      firstAction: {text: 'Initial action', drawCard: 1, production: {megacredits: 1}},
      metadata: {cardNumber: 'MYCORP30', description: 'You start with 41 M€. As your first action, draw 1 card.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(41);})
      },
    });
  }
}
