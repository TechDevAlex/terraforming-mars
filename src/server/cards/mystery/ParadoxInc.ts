import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class ParadoxInc extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.PARADOX_INC, tags: [Tag.POWER], startingMegaCredits: 35,
      firstAction: {text: 'When you play a power tag, draw a card.', production: {energy: 3}},
      metadata: {cardNumber: 'MYCORP23',
        description: 'You start with 35 M€. When you play a power tag, draw a card.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(35); b.corpBox('effect', (ce) => {ce.effect('When you play a power tag, draw a card.', (eb) => {eb.tag(Tag.POWER).startEffect.cards(1);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.POWER)) { player.drawCard(); }
  }
}
