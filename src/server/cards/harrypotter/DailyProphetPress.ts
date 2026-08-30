import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class DailyProphetPress extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.DAILY_PROPHET_PRESS,
      tags: [Tag.EARTH],
      cost: 7,

      behavior: {
        production: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'HP04',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2));
        }),
        description: 'Increase your M€ production 2 steps. (The Daily Prophet — the wizarding world\'s newspaper of record, delivered fresh each morning by owl post.)',
      },
    });
  }
}
