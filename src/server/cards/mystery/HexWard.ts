import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class HexWard extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.HEX_WARD, tags: [Tag.PLANT, Tag.SCIENCE], cost: 16,
      victoryPoints: 1,
      behavior: {production: {megacredits: 2}},
      metadata: {cardNumber: 'MY065', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(2);});}),
        description: '1 VP. (Time bends.)'},
    });
  }
}
