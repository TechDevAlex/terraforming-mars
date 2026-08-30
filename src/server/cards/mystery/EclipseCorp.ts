import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class EclipseCorp extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.ECLIPSE_CORP, tags: [Tag.BUILDING, Tag.EARTH], startingMegaCredits: 42,
      firstAction: {text: 'When you play a city tag, gain 3 M€.', production: {steel: 1, megacredits: 1}},
      metadata: {cardNumber: 'MYCORP22',
        description: 'You start with 42 M€. When you play a city tag, gain 3 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(42); b.corpBox('effect', (ce) => {ce.effect('When you play a city tag, gain 3 M€.', (eb) => {eb.tag(Tag.CITY).startEffect.megacredits(3);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.CITY)) { player.megaCredits += 3; }
  }
}
