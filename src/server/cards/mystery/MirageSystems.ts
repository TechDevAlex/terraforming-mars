import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Resource} from '../../../common/Resource';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
export class MirageSystems extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.MIRAGE_SYSTEMS, tags: [Tag.PLANT], startingMegaCredits: 44,
      firstAction: {text: 'When you play a plant tag, increase plant production 1 step.', production: {plants: 1, megacredits: 2}},
      metadata: {cardNumber: 'MYCORP24',
        description: 'You start with 44 M€. When you play a plant tag, increase plant production 1 step.',
        renderData: CardRenderer.builder((b) => {b.br.megacredits(44); b.corpBox('effect', (ce) => {ce.effect('When you play a plant tag, +1 plant production.', (eb) => {eb.tag(Tag.PLANT).startEffect.production((pb) => {pb.plants(1);});});});})
      },
    });
  }
  public onCardPlayedForCorps(player: IPlayer, card: ICard) {
    if (card.tags.includes(Tag.PLANT)) { player.production.add(Resource.PLANTS, 1, {log: true}); }
  }
}
