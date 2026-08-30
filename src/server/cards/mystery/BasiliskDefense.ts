import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BasiliskDefense extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.BASILISK_DEFENSE, tags: [Tag.JOVIAN, Tag.SPACE], startingMegaCredits: 39,
      cardDiscount: {tag: Tag.JOVIAN, amount: 3},
      firstAction: {text: 'Jovian tags cost 3 M€ less.', production: {titanium: 2}},
      metadata: {cardNumber: 'MYCORP29',
        description: 'You start with 39 M€. Jovian tags cost 3 M€ less.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(39); b.corpBox('effect', (ce) => {ce.effect('Jovian tags cost 3 M€ less.', (eb) => {eb.tag(Tag.JOVIAN).startEffect.megacredits(-3);});});})
      },
    });
  }
}
