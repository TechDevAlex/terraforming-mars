import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class TwilightIndustries extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.TWILIGHT_INDUSTRIES, tags: [Tag.PLANT, Tag.MICROBE], startingMegaCredits: 41,
      firstAction: {text: 'When you play an animal tag, gain 2 M€.', production: {plants: 2}},
      metadata: {cardNumber: 'MYCORP16',
        description: 'You start with 41 M€. When you play an animal tag, gain 2 M€.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(41); b.corpBox('effect', (ce) => {ce.effect('When you play an animal tag, gain 2 M€.', (eb) => {eb.tag(Tag.ANIMAL).startEffect.megacredits(2);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.ANIMAL)) { player.megaCredits += 2; }
  }
}
