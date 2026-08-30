import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class SpectreSystems extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.SPECTRE_SYSTEMS, tags: [Tag.SPACE], startingMegaCredits: 40,
      firstAction: {text: 'When you play a space tag, gain 1 titanium.', production: {titanium: 1}},
      metadata: {cardNumber: 'MYCORP04',
        description: 'You start with 40 M€. When you play a space tag, gain 1 titanium.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(40); b.corpBox('effect', (ce) => {ce.effect('When you play a space tag, gain 1 titanium.', (eb) => {eb.tag(Tag.SPACE).startEffect.titanium(1);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.SPACE)) { player.titanium += 1; }
  }
}
