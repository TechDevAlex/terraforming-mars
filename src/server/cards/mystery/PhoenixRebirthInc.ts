import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class PhoenixRebirthInc extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.PHOENIX_REBIRTH_INC, tags: [Tag.EARTH], startingMegaCredits: 46,
      firstAction: {text: 'When you play any card, gain 1 M€.', drawCard: 1, stock: {megacredits: 5}},
      metadata: {cardNumber: 'MYCORP19',
        description: 'You start with 46 M€. When you play any card, gain 1 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(46); b.corpBox('effect', (ce) => {ce.effect('When you play a card, gain 1 M€.', (eb) => {eb.cards(1).startEffect.megacredits(1);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, _card: ICard) {
    player.megaCredits += 1;
  }
}
