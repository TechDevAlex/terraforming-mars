import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SphinxResearch extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.SPHINX_RESEARCH, tags: [Tag.SCIENCE, Tag.SPACE], startingMegaCredits: 40,
      firstAction: {text: 'Initial action', drawCard: 1, production: {titanium: 1}},
      metadata: {cardNumber: 'MYCORP25', description: 'You start with 40 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(40);})
      },
    });
  }
}
