import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard458 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_458, tags: [Tag.PLANT, Tag.JOVIAN], cost: 15,
      victoryPoints: 3,
      behavior: {production: {megacredits: 1, heat: 2}},
      metadata: {cardNumber: 'MY458', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: '3 VP. (Steel and will forge the path.)'},
    });
  }
}
