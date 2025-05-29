import {CorporationCard} from '../corporation/CorporationCard';
import {Tag} from '../../../common/cards/Tag';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { IPlayer } from '@/server/IPlayer';
import { ICard } from '../ICard';

export class HabitatMarte extends CorporationCard {
  constructor() {
    super({
      name: CardName.HABITAT_MARTE,
      tags: [Tag.MARS],
      startingMegaCredits: 46,

      firstAction: {
        text: 'When you play a Mars Tag, draw a card with a Mars Tag, enjoy milling.',
        drawCard: {count: 1, tag: Tag.MARS},
      },

      metadata: {
        cardNumber: 'PfC22',
        description: 'You start with 46 M€.',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(46).nbsp.cards(1, {secondaryTag: Tag.MARS});
          b.corpBox('effect', (ce) => {
            ce.effect('Mars tags draw more mars tags.', (eb) => {
              eb.tag(Tag.MARS).startEffect.tag(Tag.MARS);
            });
          });
        }),
      },
    });
  }
  // Behavior in Player.getTagCount
 public onCardPlayed(player: IPlayer, card: ICard) {
    if (player.isCorporation(this.name)) {
      const tagCount = player.tags.cardTagCount(card, Tag.MARS);
      if (tagCount > 0) {
        player.drawCard(tagCount, {tag: Tag.MARS});
      }
    }
  }

}
