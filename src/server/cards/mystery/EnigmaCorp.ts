import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class EnigmaCorp extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.ENIGMA_CORP, tags: [Tag.SCIENCE], startingMegaCredits: 42,
      firstAction: {text: 'When you play a science tag, gain 2 M€.', drawCard: 2},
      metadata: {cardNumber: 'MYCORP01',
        description: 'You start with 42 M€. When you play a science tag, gain 2 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(42); b.corpBox('effect', (ce) => {ce.effect('When you play a science tag, gain 2 M€.', (eb) => {eb.tag(Tag.SCIENCE).startEffect.megacredits(2);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.SCIENCE)) { player.megaCredits += 2; }
  }
}
