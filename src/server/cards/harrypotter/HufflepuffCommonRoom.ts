import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class HufflepuffCommonRoom extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.HUFFLEPUFF_COMMON_ROOM, tags: [Tag.BUILDING], cost: 8, victoryPoints: 1,
      behavior: {production: {megacredits: 2, plants: 1}},
      metadata: {cardNumber: 'HP21', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(2).plants(1));}),
        description: 'Increase your M€ production 2 steps and plant production 1 step. (The cozy common room near the kitchens rewards those who show patience and loyalty.)'},
    });
  }
}
