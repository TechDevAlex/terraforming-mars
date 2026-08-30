import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class PhantomHoldings extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.PHANTOM_HOLDINGS, tags: [Tag.EARTH], startingMegaCredits: 45,
      firstAction: {text: 'When you play an Earth tag, gain 3 M€.', drawCard: 1},
      metadata: {cardNumber: 'MYCORP03',
        description: 'You start with 45 M€. When you play an Earth tag, gain 3 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(45); b.corpBox('effect', (ce) => {ce.effect('When you play an Earth tag, gain 3 M€.', (eb) => {eb.tag(Tag.EARTH).startEffect.megacredits(3);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.EARTH)) { player.megaCredits += 3; }
  }
}
