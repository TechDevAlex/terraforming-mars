import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Resource} from '../../../common/Resource';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class ObsidianGroup extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.OBSIDIAN_GROUP, tags: [Tag.EARTH, Tag.BUILDING], startingMegaCredits: 44,
      firstAction: {text: 'When you play an Earth tag, increase M€ production 1 step.', production: {megacredits: 2}},
      metadata: {cardNumber: 'MYCORP14',
        description: 'You start with 44 M€. When you play an Earth tag, increase M€ production 1 step.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(44); b.corpBox('effect', (ce) => {ce.effect('When you play an Earth tag, +1 M€ production.', (eb) => {eb.tag(Tag.EARTH).startEffect.production((pb) => {pb.megacredits(1);});});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.EARTH)) { player.production.add(Resource.MEGACREDITS, 1, {log: true}); }
  }
}
