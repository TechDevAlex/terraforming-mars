import {Tag} from '../../../common/cards/Tag';
import {CorporationCard} from '../corporation/CorporationCard';
import {ICorporationCard} from '../corporation/ICorporationCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
import {Resource} from '../../../common/Resource';
import {CardResource} from '../../../common/CardResource';
import {Size} from '../../../common/cards/render/Size';

export class CardCollector extends CorporationCard implements ICorporationCard {
  constructor() {
    super({
      name: CardName.CARD_COLLECTOR,
      tags: [Tag.WILD],
      startingMegaCredits: 36,
      resourceType: CardResource.DATA,

      metadata: {
        cardNumber: 'BM-CORP1',
        description: 'You start with 36 M€. Collect unique tags to unlock bonuses.',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(36);
          b.corpBox('effect', (ce) => {
            ce.effect('Unique tag bonuses:', (eb) => {
              eb.tag(Tag.WILD).startEffect.text('pyramid', Size.SMALL);
            });
            ce.br;
            ce.text('3 tags: +1 prod choice | 6: draw 1 | 9: +2 res each card | All: 2VP/res here', Size.TINY, false, false);
          });
        }),
      },
    });
  }

  private getUniqueTagCount(player: IPlayer): number {
    const tags = new Set<Tag>();
    for (const card of player.tableau) {
      for (const tag of card.tags) {
        if (tag !== Tag.WILD && tag !== Tag.EVENT) {
          tags.add(tag);
        }
      }
    }
    return tags.size;
  }

  private thresholdsReached: Set<number> = new Set();

  public onCardPlayedForCorps(player: IPlayer, _card: ICard) {
    const uniqueTags = this.getUniqueTagCount(player);

    // Threshold 3: gain 1 MC production
    if (uniqueTags >= 3 && !this.thresholdsReached.has(3)) {
      this.thresholdsReached.add(3);
      player.production.add(Resource.MEGACREDITS, 1, {log: true});
      player.game.log('${0} reached 3 unique tags (Card Collector): +1 M€ production', (b) => b.player(player));
    }

    // Threshold 6: draw 1 card
    if (uniqueTags >= 6 && !this.thresholdsReached.has(6)) {
      this.thresholdsReached.add(6);
      player.drawCard(1);
      player.game.log('${0} reached 6 unique tags (Card Collector): drew 1 card', (b) => b.player(player));
    }

    // Threshold 9: add 2 resources to each card that can hold resources
    if (uniqueTags >= 9 && !this.thresholdsReached.has(9)) {
      this.thresholdsReached.add(9);
      for (const c of player.tableau) {
        if (c.resourceType !== undefined) {
          player.addResourceTo(c, 2);
        }
      }
      player.game.log('${0} reached 9 unique tags (Card Collector): +2 resources on each card', (b) => b.player(player));
    }

    // Threshold all (13+ non-wild, non-event tags exist): Exodia mode - this card now earns VP
    if (uniqueTags >= 13 && !this.thresholdsReached.has(13)) {
      this.thresholdsReached.add(13);
      player.addResourceTo(this, 5);
      player.game.log('${0} collected ALL unique tags (Card Collector): EXODIA! +5 resources on this card', (b) => b.player(player));
    }
  }

  public override getVictoryPoints(_player: IPlayer): number {
    if (this.thresholdsReached.has(13)) {
      return this.resourceCount * 2;
    }
    return 0;
  }
}
