import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class ChaosTheory extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.CHAOS_THEORY, tags: [Tag.BUILDING], cost: 13,
      victoryPoints: -1,
      behavior: {production: {plants: 2}},
      metadata: {cardNumber: 'MY318', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.plants(2);});}),
        description: '-1 VP. (Darkness falls.)'},
    });
  }
}
