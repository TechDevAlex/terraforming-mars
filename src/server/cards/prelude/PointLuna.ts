import {Tag} from '../../../common/cards/Tag';
import {IPlayer} from '../../IPlayer';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICard} from '../ICard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class PointLuna extends CorporationCard {
  constructor() {
    super({
      name: CardName.POINT_LUNA,
      tags: [Tag.SPACE],
      startingMegaCredits: 40,

      behavior: {
        production: {titanium: 1},
      },

      metadata: {
        cardNumber: 'R10',
        description: 'You start with 1 titanium production and 40 M€.',
        renderData: CardRenderer.builder((b) => {
          b.br;
          b.production((pb) => pb.titanium(1)).nbsp.megacredits(40);
          b.corpBox('effect', (ce) => {
            ce.effect('When you play an Earth tag, draw a card.', (eb) => {
              eb.tag(Tag.EARTH).startEffect.cards(1);
            });
          });
        }),
      },
    });
  }
  public onCorpCardPlayed(player: IPlayer, card: ICorporationCard) {
    return this.onCardPlayed(player, card);
  }

  public onCardPlayed(player: IPlayer, card: ICard) {
    if (player.isCorporation(this.name)) {
      const tagCount = player.tags.cardTagCount(card, Tag.EARTH);
      if (tagCount > 0) {
        player.drawCard(tagCount);
      }
    }
  }
}
