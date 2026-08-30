import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class Precognition extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.PRECOGNITION, tags: [Tag.JOVIAN], cost: 17,
      victoryPoints: 1,
      behavior: {tr: 2},
      metadata: {cardNumber: 'MY359', renderData: CardRenderer.builder((b) => {b.tr(2);}),
        description: 'Raise your TR 2 steps. 1 VP. (Trust no one.)'},
    });
  }
}
