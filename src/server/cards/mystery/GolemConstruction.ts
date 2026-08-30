import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class GolemConstruction extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.GOLEM_CONSTRUCTION, tags: [Tag.BUILDING, Tag.POWER], startingMegaCredits: 38,
      firstAction: {text: 'When you play a building tag, gain 1 steel.', production: {energy: 1, steel: 1}},
      metadata: {cardNumber: 'MYCORP11',
        description: 'You start with 38 M€. When you play a building tag, gain 1 steel.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(38); b.corpBox('effect', (ce) => {ce.effect('When you play a building tag, gain 1 steel.', (eb) => {eb.tag(Tag.BUILDING).startEffect.steel(1);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.BUILDING)) { player.steel += 1; }
  }
}
