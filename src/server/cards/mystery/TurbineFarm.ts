import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class TurbineFarm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.TURBINE_FARM, tags: [Tag.MICROBE, Tag.POWER], cost: 21,
      behavior: {drawCard: 2},
      metadata: {cardNumber: 'MY173', renderData: CardRenderer.builder((b) => {b.text('Draw cards.');}),
        description: 'Draw cards. (Nothing is as it seems.)'},
    });
  }
}
