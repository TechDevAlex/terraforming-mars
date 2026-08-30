import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class Holodeck extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.HOLODECK, tags: [], cost: 17,
      victoryPoints: 1,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY355', renderData: CardRenderer.builder((b) => {b.oceans(1);}),
        description: '1 VP. (Space warps.)'},
    });
  }
}
