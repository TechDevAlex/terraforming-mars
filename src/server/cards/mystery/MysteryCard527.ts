import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard527 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_527, tags: [], cost: 3,
      behavior: {production: {megacredits: 1}},
      metadata: {cardNumber: 'MY527', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(1);});}),
        description: 'Adjust production. (Time bends.)'},
    });
  }
}
