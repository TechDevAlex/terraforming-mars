import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class CipherDynamics extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.CIPHER_DYNAMICS, tags: [Tag.SCIENCE, Tag.BUILDING], startingMegaCredits: 35,
      firstAction: {text: 'When you play any card, draw 1 card. Cards cost 1 M€ more.', drawCard: 3},
      metadata: {cardNumber: 'MYCORP08',
        description: 'You start with 35 M€. When you play any card, draw 1 card. Cards cost 1 M€ more.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(35); b.corpBox('effect', (ce) => {ce.effect('When you play a card, draw 1 card. Cards cost 1 M€ more.', (eb) => {eb.cards(1).startEffect.cards(1);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, _card: ICard) {
    player.drawCard();
  }
  public override getCardDiscount() { return -1; }
}
