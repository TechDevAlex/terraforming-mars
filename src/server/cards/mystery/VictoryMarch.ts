import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class VictoryMarch extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.VICTORY_MARCH, tags: [Tag.SPACE], cost: 8,
      behavior: {production: {steel: 1}},
      metadata: {cardNumber: 'MY236', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.steel(1);});}),
        description: 'Adjust production. (The stars align.)'},
    });
  }
}
