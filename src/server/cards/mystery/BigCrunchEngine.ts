import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class BigCrunchEngine extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.BIG_CRUNCH_ENGINE, tags: [Tag.PLANT, Tag.POWER], cost: 15,
      victoryPoints: -2,
      behavior: {production: {megacredits: 2}},
      metadata: {cardNumber: 'MY313', renderData: CardRenderer.builder((b) => {b.text('Adjust production.');}),
        description: 'Adjust production. (The plot thickens.)'},
    });
  }
}
