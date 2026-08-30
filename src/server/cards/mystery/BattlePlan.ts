import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BattlePlan extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BATTLE_PLAN, tags: [Tag.PLANT, Tag.SPACE], cost: 19,
      behavior: {production: {steel: 2, plants: 1}},
      metadata: {cardNumber: 'MY232', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (The truth is out there.)'},
    });
  }
}
