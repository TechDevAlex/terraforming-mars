import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';

const PLANET_TAGS: ReadonlyArray<Tag> = [Tag.EARTH, Tag.MARS, Tag.VENUS, Tag.JOVIAN];

export class CentaurAstrologers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE, name: CardName.CENTAUR_ASTROLOGERS, tags: [Tag.SCIENCE], cost: 5, victoryPoints: 1,
      metadata: {cardNumber: 'HP203', renderData: CardRenderer.builder((b) => {
        b.effect('When you play a card with an Earth, Mars, Venus, or Jovian tag, draw 1 card.', (eb) => {
          eb.tag(Tag.EARTH).slash().tag(Tag.MARS).slash().tag(Tag.VENUS).slash().tag(Tag.JOVIAN).startEffect.cards(1);
        });
      }), description: 'When you play a card with an Earth, Mars, Venus, or Jovian tag, draw 1 card. (Mars is bright tonight—the centaurs read what the shifting stars foretell.)'}
    });
  }
  public onCardPlayed(player: IPlayer, card: ICard) {
    if (card.name === this.name) return;
    if (card.tags.some((t: Tag) => PLANET_TAGS.includes(t))) {
      player.drawCard(1);
    }
  }
}
