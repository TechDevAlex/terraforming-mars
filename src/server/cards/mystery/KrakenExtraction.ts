import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class KrakenExtraction extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.KRAKEN_EXTRACTION, tags: [Tag.MICROBE], startingMegaCredits: 40,
      firstAction: {text: 'When you play a microbe tag, gain 3 M€.', production: {plants: 1, megacredits: 1}},
      metadata: {cardNumber: 'MYCORP09',
        description: 'You start with 40 M€. When you play a microbe tag, gain 3 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(40); b.corpBox('effect', (ce) => {ce.effect('When you play a microbe tag, gain 3 M€.', (eb) => {eb.tag(Tag.MICROBE).startEffect.megacredits(3);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.MICROBE)) { player.megaCredits += 3; }
  }
}
