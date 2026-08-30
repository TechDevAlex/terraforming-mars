import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class ChimeraBiotech extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.CHIMERA_BIOTECH, tags: [Tag.PLANT], startingMegaCredits: 44,
      firstAction: {text: 'When you play a plant tag, gain 2 plants.', stock: {plants: 3}},
      metadata: {cardNumber: 'MYCORP06',
        description: 'You start with 44 M€. When you play a plant tag, gain 2 plants.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(44); b.corpBox('effect', (ce) => {ce.effect('When you play a plant tag, gain 2 plants.', (eb) => {eb.tag(Tag.PLANT).startEffect.plants(2);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.PLANT)) { player.plants += 2; }
  }
}
