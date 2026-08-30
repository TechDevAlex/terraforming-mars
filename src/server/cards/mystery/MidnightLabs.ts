import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class MidnightLabs extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.MIDNIGHT_LABS, tags: [Tag.SCIENCE], startingMegaCredits: 36,
      firstAction: {text: 'When you play a science tag, draw a card.', drawCard: 2, production: {megacredits: 1}},
      metadata: {cardNumber: 'MYCORP13',
        description: 'You start with 36 M€. When you play a science tag, draw a card.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(36); b.corpBox('effect', (ce) => {ce.effect('When you play a science tag, draw a card.', (eb) => {eb.tag(Tag.SCIENCE).startEffect.cards(1);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.SCIENCE)) { player.drawCard(); }
  }
}
