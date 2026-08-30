import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class LabyrinthHoldings extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.LABYRINTH_HOLDINGS, tags: [Tag.EARTH, Tag.BUILDING], startingMegaCredits: 47,
      firstAction: {text: 'Automated cards cost 2 M€ less.', production: {megacredits: 1}},
      metadata: {cardNumber: 'MYCORP26',
        description: 'You start with 47 M€. Automated cards cost 2 M€ less.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(47); b.corpBox('effect', (ce) => {ce.effect('Automated cards cost 2 M€ less.', (eb) => {eb.empty().startEffect.megacredits(-2);});});})
      },
    });
  }
  public override getCardDiscount(_player: IPlayer, card: ICard) {
    if (card.type === CardType.AUTOMATED) return 2;
    return 0;
  }
}
