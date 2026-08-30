import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class NebulaVentures extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.NEBULA_VENTURES, tags: [Tag.JOVIAN], startingMegaCredits: 42,
      firstAction: {text: 'When you play a Jovian tag, draw a card.', production: {titanium: 1}},
      metadata: {cardNumber: 'MYCORP10',
        description: 'You start with 42 M€. When you play a Jovian tag, draw a card.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(42); b.corpBox('effect', (ce) => {ce.effect('When you play a Jovian tag, draw a card.', (eb) => {eb.tag(Tag.JOVIAN).startEffect.cards(1);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.JOVIAN)) { player.drawCard(); }
  }
}
