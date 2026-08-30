import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BreederReactor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.BREEDER_REACTOR, tags: [Tag.JOVIAN], cost: 19,
      behavior: {stock: {steel: 4}},
      metadata: {cardNumber: 'MY293', renderData: CardRenderer.builder((b) => {b.steel(4);}),
        description: 'Gain resources. (Nothing is as it seems.)'},
    });
  }
}
