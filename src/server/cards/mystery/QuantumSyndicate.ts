import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class QuantumSyndicate extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.QUANTUM_SYNDICATE, tags: [Tag.SPACE, Tag.JOVIAN], startingMegaCredits: 40,
      firstAction: {text: 'When you play a space tag, gain 2 heat.', production: {titanium: 1, megacredits: 1}},
      metadata: {cardNumber: 'MYCORP20',
        description: 'You start with 40 M€. When you play a space tag, gain 2 heat.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(40); b.corpBox('effect', (ce) => {ce.effect('When you play a space tag, gain 2 heat.', (eb) => {eb.tag(Tag.SPACE).startEffect.heat(2);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.SPACE)) { player.heat += 2; }
  }
}
