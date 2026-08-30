import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class CerberusSecurity extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.CERBERUS_SECURITY, tags: [Tag.MICROBE, Tag.PLANT], startingMegaCredits: 36,
      firstAction: {text: 'When you play a Mars tag, gain 2 plants.', production: {plants: 1}},
      metadata: {cardNumber: 'MYCORP27',
        description: 'You start with 36 M€. When you play a Mars tag, gain 2 plants.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(36); b.corpBox('effect', (ce) => {ce.effect('When you play a Mars tag, gain 2 plants.', (eb) => {eb.tag(Tag.MARS).startEffect.plants(2);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.MARS)) { player.plants += 2; }
  }
}
