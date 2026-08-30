import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class TrevorNevillesToad extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.TREVOR_NEVILLES_TOAD,
      tags: [Tag.SCIENCE],
      cost: 5,

      behavior: {
        drawCard: 1,
        stock: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'HP19',
        renderData: CardRenderer.builder((b) => {
          b.cards(1).megacredits(2);
        }),
        description: 'Draw 1 card. Gain 2 M€. (Trevor — Neville\'s perpetually escaping toad. Mostly useless, but you can\'t help feeling fond of him.)',
      },
    });
  }
}
