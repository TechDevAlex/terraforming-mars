import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class GhostProtocolCorp extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.GHOST_PROTOCOL_CORP, tags: [Tag.SPACE], startingMegaCredits: 39,
      firstAction: {text: 'Events cost 3 M€ less.', stock: {titanium: 3}},
      metadata: {cardNumber: 'MYCORP15',
        description: 'You start with 39 M€. Events cost 3 M€ less.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(39); b.corpBox('effect', (ce) => {ce.effect('Events cost 3 M€ less.', (eb) => {eb.empty().startEffect.megacredits(-3);});});})
      },
    });
  }
  public override getCardDiscount(_player: IPlayer, card: ICard) {
    if (card.type === CardType.EVENT) return 3;
    return 0;
  }
}
