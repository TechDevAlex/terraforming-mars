import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class OracleAnalytics extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.ORACLE_ANALYTICS, tags: [Tag.SCIENCE, Tag.SPACE], startingMegaCredits: 40,
      firstAction: {text: 'When you play any card with 2+ tags, draw a card.', drawCard: 1, production: {titanium: 1}},
      metadata: {cardNumber: 'MYCORP25',
        description: 'You start with 40 M€. When you play any card with 2+ tags, draw a card.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(40); b.corpBox('effect', (ce) => {ce.effect('When you play a card with 2+ tags, draw a card.', (eb) => {eb.cards(1).startEffect.cards(1);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.length >= 2) { player.drawCard(); }
  }
}
