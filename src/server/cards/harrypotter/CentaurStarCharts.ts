import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class CentaurStarCharts extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CENTAUR_STAR_CHARTS, tags: [Tag.SPACE, Tag.SCIENCE], cost: 13, victoryPoints: 1,
      behavior: {drawCard: 2},
      metadata: {cardNumber: 'HP36', renderData: CardRenderer.builder((b) => {b.cards(2);}),
        description: 'Draw 2 cards. (Mars is bright tonight, Firenze observed, and the centaurs read meaning in every constellation.)'},
    });
  }
}
