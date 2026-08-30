import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class SphinxResearch extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.SPHINX_RESEARCH, tags: [Tag.SCIENCE, Tag.MICROBE], startingMegaCredits: 38,
      firstAction: {text: 'When you play a microbe tag, gain 2 plants.', drawCard: 2},
      metadata: {cardNumber: 'MYCORP21',
        description: 'You start with 38 M€. When you play a microbe tag, gain 2 plants.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(38); b.corpBox('effect', (ce) => {ce.effect('When you play a microbe tag, gain 2 plants.', (eb) => {eb.tag(Tag.MICROBE).startEffect.plants(2);});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.MICROBE)) { player.plants += 2; }
  }
}
