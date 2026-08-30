import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class DjinnPower extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.DJINN_POWER, tags: [Tag.POWER], startingMegaCredits: 36,
      firstAction: {text: 'When you play a power tag, gain 2 energy.', production: {energy: 2}},
      metadata: {cardNumber: 'MYCORP05',
        description: 'You start with 36 M€. When you play a power tag, gain 2 energy.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(36); b.corpBox('effect', (ce) => {ce.effect('When you play a power tag, gain 2 energy.', (eb) => {eb.tag(Tag.POWER).startEffect.energy(2);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.POWER)) { player.energy += 2; }
  }
}
