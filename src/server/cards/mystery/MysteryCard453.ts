import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
export class MysteryCard453 extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED, name: CardName.MYSTERY_CARD_453, tags: [Tag.PLANT], cost: 25,
      victoryPoints: 1,
      behavior: {production: {heat: 2, titanium: 2}},
      metadata: {cardNumber: 'MY453', renderData: CardRenderer.builder((b) => {b.production((pb) => {pb.heat(2); pb.titanium(2);});}),
        description: '1 VP. (The plot thickens.)'},
    });
  }
}
