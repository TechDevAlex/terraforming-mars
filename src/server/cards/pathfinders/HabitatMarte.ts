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
      startingMegaCredits: 30,

      firstAction: {
        text: 'When you play a Mars Tag (not including this one), draw a card with a Mars Tag (per tag), enjoy milling.',
        drawCard: {count: 1, tag: Tag.MARS},
      },

      metadata: {
        cardNumber: 'PfC22',
        description: 'You start with 30 M€, draw 1 card with a Mars tag (not including this).',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(30).nbsp.cards(1, {secondaryTag: Tag.MARS});
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
