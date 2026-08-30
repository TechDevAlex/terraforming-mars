import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class VoidEnterprises extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.VOID_ENTERPRISES, tags: [Tag.EARTH, Tag.SCIENCE], startingMegaCredits: 41,
      firstAction: {text: 'When any opponent plays an event, draw a card.', drawCard: 1, production: {megacredits: 1}},
      metadata: {cardNumber: 'MYCORP30',
        description: 'You start with 41 M€. When any opponent plays an event, draw a card.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(41); b.corpBox('effect', (ce) => {ce.effect('When any opponent plays an event, draw a card.', (eb) => {eb.empty().startEffect.cards(1);});});})
      },
    });
  }
  public onCardPlayedByAnyPlayer(thisCardOwner: IPlayer, card: ICard, activePlayer: IPlayer) {
    if (card.type === CardType.EVENT && thisCardOwner.id !== activePlayer.id) { thisCardOwner.drawCard(); }
  }
}
