import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard492 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_492, tags: [Tag.JOVIAN], cost: 6,
      victoryPoints: -1,
      behavior: {greenery: {}},
      metadata: {cardNumber: 'MY492', renderData: CardRenderer.builder((b) => {b.greenery();}),
        description: '-1 VP. (Time bends.)'},
    });
  }
}
