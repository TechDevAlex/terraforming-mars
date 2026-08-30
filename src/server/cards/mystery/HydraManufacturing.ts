import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class HydraManufacturing extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.HYDRA_MANUFACTURING, tags: [Tag.BUILDING], startingMegaCredits: 37,
      firstAction: {text: 'When you play a building tag, gain 1 M€.', production: {steel: 2}},
      metadata: {cardNumber: 'MYCORP18',
        description: 'You start with 37 M€. When you play a building tag, gain 1 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(37); b.corpBox('effect', (ce) => {ce.effect('When you play a building tag, gain 1 M€.', (eb) => {eb.tag(Tag.BUILDING).startEffect.megacredits(1);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.BUILDING)) { player.megaCredits += 1; }
  }
}
