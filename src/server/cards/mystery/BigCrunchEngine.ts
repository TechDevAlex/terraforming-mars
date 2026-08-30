import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BigCrunchEngine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BIG_CRUNCH_ENGINE, tags: [Tag.PLANT, Tag.POWER], cost: 6,
      victoryPoints: -2,
      behavior: {production: {megacredits: 2}},
      metadata: {cardNumber: 'MY313', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.megacredits(2);});}),
        description: '-2 VP. (The plot thickens.)'},
    });
  }
}
