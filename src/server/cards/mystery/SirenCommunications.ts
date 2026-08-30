import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class SirenCommunications extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.SIREN_COMMUNICATIONS, tags: [Tag.BUILDING, Tag.POWER], startingMegaCredits: 43,
      firstAction: {text: 'When you play a science tag, gain 2 energy.', production: {steel: 1, energy: 1}},
      metadata: {cardNumber: 'MYCORP28',
        description: 'You start with 43 M€. When you play a science tag, gain 2 energy.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(43); b.corpBox('effect', (ce) => {ce.effect('When you play a science tag, gain 2 energy.', (eb) => {eb.tag(Tag.SCIENCE).startEffect.energy(2);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.SCIENCE)) { player.energy += 2; }
  }
}
