import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MyceliumWeb extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYCELIUM_WEB, tags: [Tag.ANIMAL], cost: 18,
      behavior: {production: {steel: 2, megacredits: 2}},
      metadata: {cardNumber: 'MY122', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (Darkness falls.)'},
    });
  }
}
