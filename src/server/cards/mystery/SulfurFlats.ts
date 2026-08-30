import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SulfurFlats extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.SULFUR_FLATS, tags: [Tag.JOVIAN], cost: 14,
      victoryPoints: 1,
      behavior: {ocean: {}},
      metadata: {cardNumber: 'MY144', renderData: CardRenderer.builder((b) => {b.oceans(1);}),
        description: '1 VP. (Steel and will forge the path.)'},
    });
  }
}
