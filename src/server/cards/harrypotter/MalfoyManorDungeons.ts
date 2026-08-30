import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MalfoyManorDungeons extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MALFOY_MANOR_DUNGEONS, tags: [Tag.BUILDING], cost: 14, victoryPoints: -1,
      behavior: {production: {megacredits: 4, steel: 1}},
      metadata: {cardNumber: 'HP38', renderData: CardRenderer.builder((b) => {b.production((pb) => pb.megacredits(4).steel(1));}),
        description: 'Increase M€ production 4 steps and steel production 1 step. -1 VP. (Wealth built on cruelty lines every stone of the Malfoy estate.)'},
    });
  }
}
