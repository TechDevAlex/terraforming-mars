import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {digit} from '../Options';

export class BehemothExcavator extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.BEHEMOTH_EXCAVATOR,
      cost: 10,

      behavior: {
        underworld: {excavate: 3},
      },

      metadata: {
        cardNumber: 'U30',
        renderData: CardRenderer.builder((b) => {
          b.excavate(3, {digit});
        }),
        description: 'Excavate 3 underground resources.',
      },
    });
  }
}
