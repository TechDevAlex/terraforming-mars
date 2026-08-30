import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class SoulForge extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.SOUL_FORGE, tags: [Tag.BUILDING], cost: 25,
      behavior: {production: {plants: 3, energy: 2}},
      metadata: {cardNumber: 'MY063', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Steel and will forge the path.)'},
    });
  }
}
