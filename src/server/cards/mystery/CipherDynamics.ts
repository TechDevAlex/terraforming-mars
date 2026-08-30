import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CipherDynamics extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.CIPHER_DYNAMICS, tags: [Tag.POWER], startingMegaCredits: 36,
      firstAction: {text: 'Initial action', production: {energy: 2}},
      metadata: {cardNumber: 'MYCORP05', description: 'You start with 36 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(36);})
      },
    });
  }
}
