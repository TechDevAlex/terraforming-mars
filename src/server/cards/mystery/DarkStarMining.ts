import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class DarkStarMining extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.DARK_STAR_MINING, tags: [Tag.POWER, Tag.SCIENCE], startingMegaCredits: 43,
      firstAction: {text: 'When you play a power tag, gain 1 steel.', production: {energy: 1}},
      metadata: {cardNumber: 'MYCORP17',
        description: 'You start with 43 M€. When you play a power tag, gain 1 steel.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(43); b.corpBox('effect', (ce) => {ce.effect('When you play a power tag, gain 1 steel.', (eb) => {eb.tag(Tag.POWER).startEffect.steel(1);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.POWER)) { player.steel += 1; }
  }
}
