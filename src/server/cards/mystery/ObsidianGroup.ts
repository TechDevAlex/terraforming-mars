import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ObsidianGroup extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.OBSIDIAN_GROUP, tags: [Tag.PLANT], startingMegaCredits: 44,
      firstAction: {text: 'Initial action', stock: {plants: 3}},
      metadata: {cardNumber: 'MYCORP06', description: 'You start with 44 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(44);})
      },
    });
  }
}
