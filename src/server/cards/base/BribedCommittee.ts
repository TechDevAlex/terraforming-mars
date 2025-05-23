import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class BribedCommittee extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.BRIBED_COMMITTEE,
      tags: [Tag.EARTH],
      cost: 9,
      victoryPoints: -3,

      behavior: {
        tr: 3,
      },

      metadata: {
        cardNumber: '112',
        description: 'Raise your TR 3 steps.',
        renderData: CardRenderer.builder((b) => b.tr(3)),
      },
    });
  }
}
