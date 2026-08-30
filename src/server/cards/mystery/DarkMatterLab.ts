import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class DarkMatterLab extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT, name: CardName.DARK_MATTER_LAB, tags: [Tag.ANIMAL], cost: 14,
      behavior: {stock: {plants: 5}},
      metadata: {cardNumber: 'MY035', renderData: CardRenderer.builder((b) => {b.plants(5);}),
        description: 'Gain resources. (Innovation breeds opportunity.)'},
    });
  }
}
